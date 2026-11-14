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
		"content": `<style>.axr1u4bxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V13C3.5 10.75 5 9.5 7 9.5s3.5 1.25 3.5 3.5v8.5m3.5 0v-4c0-1.75 1.25-3 3-3s3 1.25 3 3v4M10.5 16l1.75 2.5l1.75-.75M5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM15.25 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="axr1u4bxh"/>`,
		"fallback": "uix-sharp:onboarding-buddy",
	});
}

export default Component;
