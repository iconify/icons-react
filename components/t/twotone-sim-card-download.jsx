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
		"content": `<style>.i5d124wzc {
  fill: currentColor;
  d: path("m12 17l4-4h-3V9l-2 .02V13H8z");
}

.pbrnbxzcd {
  fill: currentColor;
  d: path("M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z");
}

.zqcv8_bld {
  fill: currentColor;
  d: path("M6 8.83V20h12V4h-7.17zm5 .19L13 9v4h3l-4 4l-4-4h3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="zqcv8_bld"/><path class="pbrnbxzcd"/><path class="i5d124wzc"/>`,
		"fallback": "ic:twotone-sim-card-download",
	});
}

export default Component;
