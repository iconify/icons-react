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
		"content": `<style>.j38utxbis {
  d: path("M13 11a2.5 2.5 0 1 1-2.5-2.5");
}

.kyy2if6za {
  d: path("M5 10.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.trfxszbrb {
  d: path("M2.5 16h15a2.5 2.5 0 0 0 2.5-2.5v-4m-1.25-3l1.25 3l1.5-2.75M3 19.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kyy2if6za"/><path class="trfxszbrb"/><path class="j38utxbis"/></g>`,
		"fallback": "uix-sharp:slow-down",
	});
}

export default Component;
