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
		"content": `<style>.ef5q8_bsg {
  d: path("M4 6.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm4 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm4 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="ef5q8_bsg"/>`,
		"fallback": "fluent:more-16-filled",
	});
}

export default Component;
