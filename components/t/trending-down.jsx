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
		"content": `<style>.hrix8ccrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7L8.5 13.5L13.5 8.5L21.4 16.4M16 17H21.5C21.7761 17 22 16.7761 22 16.5V11");
}
</style><path class="hrix8ccrj"/>`,
		"fallback": "keyline-icons:trending-down",
	});
}

export default Component;
