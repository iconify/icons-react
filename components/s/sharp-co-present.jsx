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
		"content": `<style>.gsi4w0b8j {
  fill: currentColor;
  d: path("M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66");
}

.hpbl23o_b {
  fill: currentColor;
  d: path("M23 3H1v10h2V5h18v16h2z");
}

.l31vcjxth {
  cx: 9px;
  cy: 10px;
  r: 4px;
  fill: currentColor;
}
</style><path class="hpbl23o_b"/><circle class="l31vcjxth"/><path class="gsi4w0b8j"/>`,
		"fallback": "ic:sharp-co-present",
	});
}

export default Component;
