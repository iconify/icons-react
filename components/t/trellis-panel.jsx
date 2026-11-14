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
		"content": `<style>.po9losbsx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 9.001V17.5q0 1.76 1.245 3.005T6.5 21.75h11q1.76 0 3.005-1.245T21.75 17.5v-11q0-1.76-1.245-3.005T17.5 2.25h-11q-1.76 0-3.005 1.245T2.25 6.5z");
}
</style><path class="po9losbsx"/>`,
		"fallback": "uix-solid:trellis-panel",
	});
}

export default Component;
