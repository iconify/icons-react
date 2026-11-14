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
		"content": `<style>.bnuzp2bpd {
  d: path("M8 18c0 2 1.5 3.5 3 3c.695-.232 1.068-.786 1.418-1.463m4.784-7.541A10 10 0 0 0 17.5 9.5c0-4-3-7-7-7s-7 3-7 7");
}

.gbou95bgj {
  d: path("M7.5 9.5C7.5 7.5 9 6 11 6s3 1.5 3 3.5s-2 2.5-2.5 4m3.25 3.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm4.5 2l2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bnuzp2bpd"/><path class="gbou95bgj"/></g>`,
		"fallback": "uix-sharp:otoscope",
	});
}

export default Component;
