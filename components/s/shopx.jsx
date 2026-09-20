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
		"content": `<style>.zkkoj6brq {
  fill: var(--svg-color--061a25, #061a25);
  d: path("M20.986 11.615a6.744 6.744 0 0 1-8.6-8.6c-.135-.012-.259-.012-.388-.012a8.994 8.994 0 0 0-8.69 11.327a4.53 4.53 0 0 1 6.104 6.284a8.995 8.995 0 0 0 11.58-8.993z");
}
</style><path class="zkkoj6brq"/>`,
		"fallback": "token-branded:shopx",
	});
}

export default Component;
