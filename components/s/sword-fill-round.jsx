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
		"content": `<style>.hngr2_b6b {
  fill: currentColor;
  d: path("m7.086 15.5l-2.793-2.793a.999.999 0 1 1 1.414-1.414L7 12.586l9.293-9.293C17.252 2.335 18.683 2 20 2h1a1 1 0 0 1 1 1v1c0 1.317-.335 2.748-1.293 3.707L11.414 17l1.293 1.293a.999.999 0 1 1-1.414 1.414L8.5 16.914L5.414 20l.293.293a.999.999 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 1.414-1.414l.293.293Z");
}
</style><path class="hngr2_b6b"/>`,
		"fallback": "coolicons:sword-fill-round",
	});
}

export default Component;
