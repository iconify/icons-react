import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.py-b4wb4g {
  fill: currentColor;
  d: path("M5.23 18.77V20q-.507 0-.868-.362T4 18.77zM4 16.307v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zM5.23 5.23H4q0-.508.362-.87T5.23 4zM7.693 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zm3.692 13.54H20q0 .507-.362.869T18.77 20zm0-2.462v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zm0-3.692V4q.508 0 .87.362T20 5.23z");
}
</style><path class="py-b4wb4g"/>`,
		"fallback": "material-symbols-light:select",
	});
}

export default Component;
