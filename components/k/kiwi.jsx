import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.he8d2db8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.049 17.658v12.684m9.619-12.554l-6.085 6.085l6.368 6.367");
}

.lmjqanmtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.85 15.47s-4.957-8.336-17.726-8.31C11.354 7.187 3.85 15.128 3.85 24s7.641 16.791 20.274 16.84s17.726-8.31 17.726-8.31");
}

.zgift6bam {
  cx: 42.1px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="lmjqanmtj"/><path class="he8d2db8u"/><circle class="zgift6bam"/>`,
		"fallback": "arcticons:kiwi",
	});
}

export default Component;
