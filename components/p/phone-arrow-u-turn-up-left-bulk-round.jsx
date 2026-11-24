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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fx62wz8gm {
  d: path("M17.707 3.707L16.414 5H18c1.064 0 2.078.418 2.828 1.172A3.98 3.98 0 0 1 22 9a1 1 0 0 1-2 0a2 2 0 0 0-2-2h-1.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414v-.001l3-2.999a.999.999 0 1 1 1.414 1.414");
}

.l_aruko7w {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h1c2.253 0 4.118 1.603 4.928 3.629c.351.877.592 1.812.592 2.761c0 .419-.05.84-.177 1.24a2.65 2.65 0 0 1-.636 1.077a1.123 1.123 0 0 0 0 1.586l2 2a1.123 1.123 0 0 0 1.586 0c.459-.459 1.038-.777 1.651-.982A6.5 6.5 0 0 1 18 13h1c.53 0 1.023.211 1.424.551C21.61 14.555 22 16.522 22 18v1c0 .797-.314 1.558-.879 2.121A3 3 0 0 1 19 22a16.8 16.8 0 0 1-6.617-1.336a16.9 16.9 0 0 1-5.404-3.643a16.9 16.9 0 0 1-3.643-5.404A16.8 16.8 0 0 1 2 5c0-.797.314-1.558.879-2.121A3 3 0 0 1 5 2");
}
</style><g class="cuyn6tgcc"><path class="l_aruko7w"/><path class="fx62wz8gm"/></g>`,
		"fallback": "coolicons:phone-arrow-u-turn-up-left-bulk-round",
	});
}

export default Component;
