import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ddi81zbyp {
  fill: currentColor;
  d: path("M11.52 5a1 1 0 0 1 .944.735l4.578 16.646l3.5-11.668a1 1 0 0 1 1.881-.098L24.667 16H28a1 1 0 1 1 0 2h-4a1 1 0 0 1-.923-.615l-1.424-3.417l-3.695 12.32a1 1 0 0 1-1.922-.023L11.43 9.518l-2.477 7.785A1 1 0 0 1 8 18H4a1 1 0 1 1 0-2h3.269l3.278-10.303A1 1 0 0 1 11.52 5");
}
</style><path class="ddi81zbyp"/>`,
		"fallback": "fluent:pulse-32-regular",
	});
}

export default Component;
