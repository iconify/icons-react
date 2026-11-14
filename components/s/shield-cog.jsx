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
		"content": `<style>.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.orr8v4brb {
  d: path("m11.421 8.812l.047-1.276h1.064l.047 1.276l.913.378l.935-.87l.753.753l-.87.935l.378.913l1.276.047v1.064l-1.276.047l-.378.913l.87.935l-.753.753l-.935-.87l-.913.378l-.047 1.276h-1.064l-.047-1.276l-.913-.378l-.935.87l-.753-.753l.87-.935l-.378-.913l-1.276-.047v-1.064l1.276-.047l.378-.913l-.87-.935l.753-.753l.935.87Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hnvnn0bgl"/><path class="orr8v4brb"/></g>`,
		"fallback": "uix-sharp:shield-cog",
	});
}

export default Component;
