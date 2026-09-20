import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n-co1hbip {
  fill: currentColor;
  d: path("M10.25 17a3.75 3.75 0 0 1 3.675 3H25.25a.75.75 0 0 1 0 1.5H13.925a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h3.825a3.75 3.75 0 0 1 3.675-3m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m7.5-15a3.75 3.75 0 0 1 3.675 3h3.825a.75.75 0 0 1 0 1.5h-3.825a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h11.325a3.75 3.75 0 0 1 3.675-3m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5");
}
</style><path class="n-co1hbip"/>`,
		"fallback": "fluent:options-28-regular",
	});
}

export default Component;
