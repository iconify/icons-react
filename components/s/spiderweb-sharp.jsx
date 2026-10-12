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
		"content": `<style>.kv_92abih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12V2.75M12 12l6.54-6.54M12 12h9.25M12 12l6.54 6.54M12 12v9.25M12 12l-6.54 6.54M12 12H2.75M12 12L5.46 5.46M12 5.5l2.04 1.58l2.56.32m0 0l.32 2.56L18.5 12m0 0l-1.58 2.04l-.32 2.56m0 0l-2.56.32L12 18.5m0 0l-2.04-1.58l-2.56-.32m0 0l-.32-2.56L5.5 12m0 0l1.58-2.04l.32-2.56m0 0l2.56-.32L12 5.5m0 3.25l.99.85l1.31.1m0 0l.1 1.31l.85.99m0 0l-.85.99l-.1 1.31m0 0l-1.31.1l-.99.85m0 0l-.99-.85l-1.31-.1m0 0l-.1-1.31l-.85-.99m0 0l.85-.99l.1-1.31m0 0l1.31-.1l.99-.85");
}
</style><path class="kv_92abih"/>`,
		"fallback": "iconoven:spiderweb-sharp",
	});
}

export default Component;
