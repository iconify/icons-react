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
		"content": `<style>.g7mb5_blv {
  cx: 7px;
  cy: 14px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kl5rh9pnj {
  fill: currentColor;
  d: path("M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m8-10c0-2.21-1.79-4-4-4S7 3.79 7 6s1.79 4 4 4s4-1.79 4-4m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5.6 5.6c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2");
}

.tww6vfbqx {
  cx: 16.6px;
  cy: 17.6px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xfbxiubhy {
  cx: 11px;
  cy: 6px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><circle class="xfbxiubhy"/><circle class="tww6vfbqx"/><circle class="g7mb5_blv"/><path class="kl5rh9pnj"/>`,
		"fallback": "ic:twotone-scatter-plot",
	});
}

export default Component;
