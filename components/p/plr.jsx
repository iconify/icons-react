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
		"content": `<style>.txq30yb0q {
  fill: var(--svg-color--00ff24, #00ff24);
  d: path("M18.188 6.375L14.813 3v11.25h-9v3.375L9.187 21v-3.375h9zM10.313 5.25h-4.5v4.5h4.5z");
}
</style><path class="txq30yb0q"/>`,
		"fallback": "token-branded:plr",
	});
}

export default Component;
