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
		"content": `<style>.aj6nzpbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H12V10H2.5ZM12 19.2v2.3H2.5V14H12v2.8M7.25 10v4m7.5 4l2 2L21 15.75");
}
</style><path class="aj6nzpbaw"/>`,
		"fallback": "uix-sharp:integration-test",
	});
}

export default Component;
