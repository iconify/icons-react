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
		"content": `<style>.cmgy946rg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 3h5a2 2 0 1 1 0 4a1 1 0 0 0-.707.293m3.414 9.414A1 1 0 0 1 18 17H6a1 1 0 0 1-1-1v-1c0-2 4-2 4-4V8a1 1 0 0 0-1-1a2 2 0 0 1-1.823-2.823M12 17v4M4 2l18 18");
}
</style><path class="cmgy946rg"/>`,
		"fallback": "coolicons:pin-off",
	});
}

export default Component;
