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
		"content": `<style>.z-tmbrmqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 21.25V14L4.6 11.35a1.5 1.5 0 0 1 2.12-2.12l1.03 1.02V5.5a1.5 1.5 0 0 1 3 0V4.25a1.5 1.5 0 0 1 3 0V5.5a1.5 1.5 0 0 1 3 0V8a1.5 1.5 0 0 1 3 0v6.5a6.75 6.75 0 0 1-3.5 5.9v.85Zm3.5-15.75V10m3-4.5V10m3-2v2m-14-2.75C2.75 5.5 3.6 4.05 5 3m13.75-.25a3.5 3.5 0 0 1 2.5 2.5");
}
</style><path class="z-tmbrmqw"/>`,
		"fallback": "iconoven:sign-video",
	});
}

export default Component;
