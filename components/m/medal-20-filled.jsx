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
		"content": `<style>.t943itohu {
  fill: currentColor;
  d: path("M10 11a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7M5.11 2.22a1.84 1.84 0 0 0 .2 1.646l4.114 6.171a4.5 4.5 0 0 0-2.917 1.625L3.42 7.032A2.5 2.5 0 0 1 3 5.644v-.091a2.5 2.5 0 0 1 .356-1.286l.632-1.054A2.5 2.5 0 0 1 5.11 2.22m9.779 0a2.5 2.5 0 0 1 1.123.994l.632 1.054c.233.388.356.833.356 1.286v.09a2.5 2.5 0 0 1-.42 1.387l-3.088 4.631a4.5 4.5 0 0 0-2.917-1.625l4.115-6.17a1.84 1.84 0 0 0 .198-1.646M13.156 2a.844.844 0 0 1 .702 1.312L12.732 5H7.268L6.142 3.312A.845.845 0 0 1 6.844 2z");
}
</style><path class="t943itohu"/>`,
		"fallback": "fluent:medal-20-filled",
	});
}

export default Component;
