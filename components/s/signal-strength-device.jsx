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
		"content": `<style>.v1wcq-e8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h13v13h-13Zm13.5 19V19m2.75 2.5v-5m2.75 5v-8");
}
</style><path class="v1wcq-e8k"/>`,
		"fallback": "uix-sharp:signal-strength-device",
	});
}

export default Component;
