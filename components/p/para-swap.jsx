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
		"content": `<style>.b8bnycchj {
  fill: var(--svg-color--2669f5, #2669f5);
  d: path("M21 19.2L12.675 4.8L4.35 19.2zM6.825 11.55L10.65 4.8H3zM17.6 17.294H7.75l4.925-8.52z");
}
</style><path class="b8bnycchj"/>`,
		"fallback": "token-branded:para-swap",
	});
}

export default Component;
