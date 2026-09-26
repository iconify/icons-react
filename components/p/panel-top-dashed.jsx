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
		"content": `<style>.vyhobybdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V9H3ZM3 18C3 19.6569 4.34315 21 6 21M18 21C19.6569 21 21 19.6569 21 18M3 13V14M21 13V14M10.5 21H13.5");
}
</style><path class="vyhobybdh"/>`,
		"fallback": "keyline-icons:panel-top-dashed",
	});
}

export default Component;
