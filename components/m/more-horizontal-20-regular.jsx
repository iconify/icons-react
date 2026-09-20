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
		"content": `<style>.xxmekcxlq {
  fill: currentColor;
  d: path("M6.25 10a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M15 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><path class="xxmekcxlq"/>`,
		"fallback": "fluent:more-horizontal-20-regular",
	});
}

export default Component;
