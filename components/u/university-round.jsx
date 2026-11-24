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
		"content": `<style>.p1efje4xg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m20 6l-8 3l-8-3l8-3zM3 21h18M20 6v3M6 12v5m4-5v5m4-5v5m4-5v5");
}
</style><path class="p1efje4xg"/>`,
		"fallback": "coolicons:university-round",
	});
}

export default Component;
