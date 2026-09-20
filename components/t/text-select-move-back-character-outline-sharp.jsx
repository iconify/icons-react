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
		"content": `<style>.tj9crcjpg {
  fill: currentColor;
  d: path("M11.385 5.23V4h1.23v1.23zm0 14.77v-1.23h1.23V20zM7.692 5.23V4h1.231v1.23zm0 14.77v-1.23h1.231V20zM4 5.23V4h1.23v1.23zM4 20v-1.23h1.23V20zm11 0v-1h2V5h-2V4h5v1h-2v14h2v1zm-7.711-4.712L4 12l3.289-3.288l.707.688l-2.075 2.1h7.31v1H5.92l2.075 2.1z");
}
</style><path class="tj9crcjpg"/>`,
		"fallback": "material-symbols-light:text-select-move-back-character-outline-sharp",
	});
}

export default Component;
