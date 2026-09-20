import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":375};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xpaw3gbpy {
  fill: var(--svg-color--ffd426, #FFD426);
  d: path("M0 218.14l119.805-16.955l-105.676 173.49l240.742-217.569l-103.984 10.172L256 0z");
}
</style><path class="xpaw3gbpy"/>`,
		"fallback": "logos:serveless",
	});
}

export default Component;
