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
		"content": `<style>.abd0ree1e {
  d: path("M18.4731 12C18.4731 11.7501 18.5344 11.5002 18.657 11.2706L21.809 5.36689C22.5499 3.97914 20.9984 2.49789 19.5025 3.16496L2.99281 10.5275C2.33094 10.8226 2 11.4113 2 12");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mqjqe9b5h {
  d: path("M18.4731 12C18.4731 12.2499 18.5344 12.4998 18.657 12.7294L21.809 18.6331C22.5499 20.0209 20.9984 21.5021 19.5025 20.835L2.99281 13.4725C2.33094 13.1774 2 12.5887 2 12");
}
</style><g class="ipq1z-bjh"><path class="mqjqe9b5h"/><path class="abd0ree1e"/></g>`,
		"fallback": "solar:map-arrow-left-line-duotone",
	});
}

export default Component;
