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
		"content": `<style>.k5mukcb9h {
  d: path("M12.4 21.5H4.5v-19h15v9.7M8 6.5h3.5M8 10h8m-8 3.5h5.4M8 17h2.5");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ze82kx64m {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="k5mukcb9h"/><path class="ze82kx64m"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:loan-invoice-finance",
	});
}

export default Component;
