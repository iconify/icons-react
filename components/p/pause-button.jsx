import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w2vml8clc {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M36.57 96h18.29V32H36.57zm36.57-64v64h18.29V32z");
}
</style><path class="w2vml8clc"/>`,
		"fallback": "noto-v1:pause-button",
	});
}

export default Component;
