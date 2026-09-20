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
		"content": `<style>.e4g6ancln {
  fill: var(--svg-color--3033be, #3033be);
  d: path("m12 21l-7.58-9l9.6-2.5z");
}

.ft5dv1b6b {
  fill: none;
}

.k2e3xtgca {
  fill: var(--svg-color--5751fb, #5751fb);
  d: path("m12 3l-7.58 9l9.602-2.5z");
}

.pno0n2lbf {
  fill: var(--svg-color--51a0fc, #51a0fc);
  d: path("M19.579 12L14.02 9.5L12 3z");
}

.xepjev_dv {
  fill: var(--svg-color--5751fb, #5751fb);
  d: path("M19.579 12L12 21l2.021-11.5z");
}
</style><g class="ft5dv1b6b"><path class="xepjev_dv"/><path class="e4g6ancln"/><path class="pno0n2lbf"/><path class="k2e3xtgca"/></g>`,
		"fallback": "token-branded:polk",
	});
}

export default Component;
