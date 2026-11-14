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
		"content": `<style>.rhk44qbdt {
  d: path("M12.8 20H2.5V4h19v8.3m0 6.9v.8h-.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wtlt_w2cm {
  d: path("M6 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 8a3 3 0 0 1 6 0m3-8h4.5m-3.75 9l2 2L21 15.75");
}
</style><g class="ulnmmdpxh"><path class="rhk44qbdt"/><path class="wtlt_w2cm"/></g>`,
		"fallback": "uix-sharp:license-compliance",
	});
}

export default Component;
