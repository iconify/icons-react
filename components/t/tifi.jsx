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
		"content": `<style>.ka0exbbmx {
  fill: var(--svg-color--00a3ff, #00a3ff);
  d: path("M3 14.7v-.18l6.412-6.57h2.97l2.318 2.394l-1.525 1.598l-2.273-2.38l-4.95 5.138zm18-5.4v.18l-6.413 6.57h-2.97L9.3 13.656l1.525-1.597l2.273 2.38l4.95-5.139z");
}
</style><path class="ka0exbbmx"/>`,
		"fallback": "token-branded:tifi",
	});
}

export default Component;
