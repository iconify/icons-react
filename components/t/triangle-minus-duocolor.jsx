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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qfg574k9n {
  stroke-opacity: 0.4;
  d: path("M10 14h4");
}

.w8co5vb5n {
  d: path("m13.728 4.992l7 12C21.505 18.326 20.544 20 19 20H5c-1.544 0-2.505-1.674-1.728-3.008l7-12c.772-1.323 2.684-1.323 3.456 0");
}
</style><g class="nrj6p8qat"><path class="qfg574k9n"/><path class="w8co5vb5n"/></g>`,
		"fallback": "coolicons:triangle-minus-duocolor",
	});
}

export default Component;
