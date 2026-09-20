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
		"content": `<style>.gky0jhb1i {
  fill: var(--svg-color--2f355b, #2f355b);
  d: path("m11.8 5.912l-4.317 9.53h3.209l4.356-9.53h4.041L21 18.09h-3.527l-.203-2.647h-3.324l-.902 2.647H3L8.456 5.912zm2.788 7.941h2.402l-.435-5.823z");
}
</style><path class="gky0jhb1i"/>`,
		"fallback": "token-branded:la",
	});
}

export default Component;
