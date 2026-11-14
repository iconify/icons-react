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
		"content": `<style>.cygrqrbwo {
  d: path("M12.544 20.5H3.5v-10L12 3.25l8.5 7.25v1.456m-5.25 7.794a2.75 1.75 0 1 0 5.5 0a2.75 1.75 0 1 0-5.5 0Z");
}

.qwlc_gbpj {
  d: path("M14.25 16.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3-1.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3 1.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cygrqrbwo"/><path class="qwlc_gbpj"/></g>`,
		"fallback": "uix-sharp:pet-friendly-home",
	});
}

export default Component;
