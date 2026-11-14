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
		"content": `<style>.txyevob2f {
  d: path("M3.5 16.5H15");
}

.ugghmpb9p {
  fill: currentColor;
  d: path("M3 6.5h18V11H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ugghmpb9p"/><path class="txyevob2f"/></g>`,
		"fallback": "uix-sharp:pii-redaction",
	});
}

export default Component;
