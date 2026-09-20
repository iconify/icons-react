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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.li0-sxb7x {
  fill: var(--svg-color--fcbe33, #fcbe33);
  d: path("M21 7.8v8.4a1.815 1.815 0 0 1-1.63 1.79c-1.11.106-1.86-.734-1.87-1.79v-1.37c0-.38-.22-.75-.45-1.05a1.798 1.798 0 0 0-2.9.02l-.935 1.31l-1.505 2.116A1.8 1.8 0 0 1 8.8 15.12l5.99-8.4A1.8 1.8 0 0 1 16.21 6h2.995A1.8 1.8 0 0 1 21 7.8");
}

.rpacwisnv {
  fill: var(--svg-color--0d0a03, #0d0a03);
  d: path("M15.5 17.501a1.5 1.5 0 1 0 0-3.001a1.5 1.5 0 0 0 0 3.001");
}

.tugr0ibab {
  fill: var(--svg-color--0d0a03, #0d0a03);
  d: path("M4.8 6h6a1.8 1.8 0 0 1 1.465 2.845l-6 8.4A1.8 1.8 0 0 1 3 16.206V7.802A1.8 1.8 0 0 1 4.8 6m.95 4.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><g class="ft5dv1b6b"><path class="rpacwisnv"/><path class="li0-sxb7x"/><path class="tugr0ibab"/></g>`,
		"fallback": "token-branded:mntl",
	});
}

export default Component;
