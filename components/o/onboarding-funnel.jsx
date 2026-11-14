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
		"content": `<style>.bly95mr6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h15L12 11v8.5l-4-2V11Zm13.75 12.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM14.5 21.5C14.5 20 16 19 18 19s3.5 1 3.5 2.5");
}
</style><path class="bly95mr6p"/>`,
		"fallback": "uix-sharp:onboarding-funnel",
	});
}

export default Component;
