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
		"content": `<style>.dpobqpbig {
  d: path("M3 3.5v13m0-7h14v3.25H3Zm1.75-3.25h4.5V8.5h-4.5ZM16 12.75v1.75M14.25 21L17 18l2 1.75l2.5-3.5");
}

.qcxqkw8dv {
  d: path("M19 16h2.75v2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dpobqpbig"/><path class="qcxqkw8dv"/></g>`,
		"fallback": "uix-sharp:recovery-room",
	});
}

export default Component;
