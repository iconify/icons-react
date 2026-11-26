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
		"content": `<style>.v7l-blb3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8L12 2M9 5L12 2L15 5M12 16L12 22M9 19L12 22L15 19M5 12L19 12");
}
</style><path class="v7l-blb3o"/>`,
		"fallback": "keyline-icons:unfold-vertical-fill",
	});
}

export default Component;
