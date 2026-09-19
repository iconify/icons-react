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
		"content": `<style>.kxqrpp5op {
  fill: currentColor;
  d: path("M17 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.slhyicbpa {
  fill: currentColor;
  d: path("M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4M5 16c2.21 0 4-1.79 4-4S7.21 8 5 8s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2");
}
</style><path class="kxqrpp5op"/><path class="slhyicbpa"/>`,
		"fallback": "ic:twotone-hdr-strong",
	});
}

export default Component;
