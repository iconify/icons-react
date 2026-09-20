import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xg2lc5bvj {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8.504 6a.5.5 0 0 0-.472.324L6.653 10H5.5a.5.5 0 0 0 0 1H7a.5.5 0 0 0 .468-.324l1.02-2.722l2.041 5.714a.5.5 0 0 0 .918.056L12.81 11h1.69a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.447.276l-.976 1.953l-2.106-5.897A.5.5 0 0 0 8.504 6");
}
</style><path class="xg2lc5bvj"/>`,
		"fallback": "fluent:pulse-square-20-filled",
	});
}

export default Component;
