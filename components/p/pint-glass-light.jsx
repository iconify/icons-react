import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.su0nl9s8z {
  fill: currentColor;
  d: path("M204.49 28a6 6 0 0 0-4.49-2H56a6 6 0 0 0-6 6.71l23.16 193A14 14 0 0 0 87.1 238h81.8a14 14 0 0 0 13.9-12.33L206 32.71a6 6 0 0 0-1.51-4.71m-11.25 10l-3.36 28H66.12l-3.36-28Zm-22.35 186.24a2 2 0 0 1-2 1.76H87.1a2 2 0 0 1-2-1.76L67.56 78h120.88Z");
}
</style><path class="su0nl9s8z"/>`,
		"fallback": "ph:pint-glass-light",
	});
}

export default Component;
