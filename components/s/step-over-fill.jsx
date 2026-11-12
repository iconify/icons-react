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
		"content": `<style>.iwoi92b6v {
  fill: currentColor;
  d: path("m18.99 10.596l1.303-1.303a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414l1.278 1.278a6 6 0 0 0-2.851-4.687a6 6 0 0 0-5.469-.413A5.99 5.99 0 0 0 5 11a1 1 0 0 1-2 0a8 8 0 0 1 7.798-7.997a8 8 0 0 1 8.192 7.593M15 19a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="iwoi92b6v"/>`,
		"fallback": "coolicons:step-over-fill",
	});
}

export default Component;
