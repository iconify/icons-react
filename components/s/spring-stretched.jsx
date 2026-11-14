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
		"content": `<style>.q25slbcax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V5l5 2l-10 3l10 3l-10 3l5 2v3.5m-3-19h6m-6 19h6");
}
</style><path class="q25slbcax"/>`,
		"fallback": "uix-sharp:spring-stretched",
	});
}

export default Component;
