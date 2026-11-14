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
		"content": `<style>.tgfd268pb {
  d: path("m15.182 5.99l3.182-3.182l2.828 2.828l-3.182 3.182ZM5.106 13.591l5.303 5.303");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe3563zdn {
  d: path("m2.808 15.536l10.96-8.839l1.768-.354l2.121 2.121l-.354 1.768l-8.839 10.96Z");
}
</style><g class="ulnmmdpxh"><path class="xe3563zdn"/><path class="tgfd268pb"/></g>`,
		"fallback": "uix-sharp:toothpaste-tube",
	});
}

export default Component;
