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
		"content": `<style>.z8ljkbc5n {
  fill: var(--svg-color--23f7dd, #23f7dd);
  d: path("M13.125 12L21 7.782L19.648 5.25l-7.354 2.757a.8.8 0 0 1-.59 0L4.353 5.25L3 7.791L10.875 12L3 16.207l1.352 2.543l7.353-2.757a.8.8 0 0 1 .589 0l7.354 2.757L21 16.193z");
}
</style><path class="z8ljkbc5n"/>`,
		"fallback": "token-branded:multiversx",
	});
}

export default Component;
