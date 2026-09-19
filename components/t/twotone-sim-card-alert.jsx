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
		"content": `<style>.j1lvqlb_n {
  fill: currentColor;
  d: path("M6 8.83V20h12V4h-7.17zM11 8h2v5h-2zm0 7h2v2h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.nh6rklb7k {
  fill: currentColor;
  d: path("M11 15h2v2h-2zm0-7h2v5h-2z");
}

.pbrnbxzcd {
  fill: currentColor;
  d: path("M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z");
}
</style><path class="j1lvqlb_n"/><path class="pbrnbxzcd"/><path class="nh6rklb7k"/>`,
		"fallback": "ic:twotone-sim-card-alert",
	});
}

export default Component;
