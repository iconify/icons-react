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
		"content": `<style>.lfqgv2blk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.111 3.161l12.728 12.728a1.5 1.5 0 0 1 0 2.121l-2.829 2.829a1.5 1.5 0 0 1-2.121 0L3.161 8.111a1.5 1.5 0 0 1 0-2.121L5.99 3.161a1.5 1.5 0 0 1 2.121 0Zm4.243 4.243l-4.95 4.95m9.192-.708l-4.95 4.95");
}
</style><path class="lfqgv2blk"/>`,
		"fallback": "uix-sharp:kids-first-aid",
	});
}

export default Component;
