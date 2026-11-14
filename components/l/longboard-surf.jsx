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
		"content": `<style>.aiucu5zzp {
  d: path("M7.75 18L11 20.5l-1.25-3.75");
}

.am-8_fjjp {
  d: path("M4 19c0-5.5 9.5-15 15-15c0 5.5-9.5 15-15 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="am-8_fjjp"/><path class="aiucu5zzp"/></g>`,
		"fallback": "uix-sharp:longboard-surf",
	});
}

export default Component;
