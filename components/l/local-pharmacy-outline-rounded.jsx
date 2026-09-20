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
		"content": `<style>.czihr1ylq {
  fill: currentColor;
  d: path("M5.1 21q-1.05 0-1.637-.825t-.263-1.8L5 13L3.2 7.625q-.325-.975.263-1.8T5.1 5h10.6l1.025-2.825q.175-.5.638-.712t.962-.038t.713.638t.037.962L18.35 5h.55q1.05 0 1.638.825t.262 1.8L19 13l1.8 5.375q.325.975-.263 1.8T18.9 21zm5.9-4h2v-3h3v-2h-3V9h-2v3H8v2h3zm-5.9 2h13.8l-2-6l2-6H5.1l2 6zm6.9-6");
}
</style><path class="czihr1ylq"/>`,
		"fallback": "material-symbols:local-pharmacy-outline-rounded",
	});
}

export default Component;
