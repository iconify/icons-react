import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lzt_qfb-m {
  fill: currentColor;
  d: path("M7.194 2.101a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.495a.9.9 0 0 1 .5 1.535l-2.462 2.399l.581 3.387a.9.9 0 0 1-1.306.949l-3.042-1.6l-3.042 1.6a.9.9 0 0 1-1.306-.949l.58-3.387l-2.46-2.4a.9.9 0 0 1 .499-1.534l3.4-.495z");
}
</style><path class="lzt_qfb-m"/>`,
		"fallback": "fluent:star-16-filled",
	});
}

export default Component;
