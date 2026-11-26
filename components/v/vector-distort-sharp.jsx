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
		"content": `<style>.oc3kr120r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L7 3L7 7L3 7ZM17 6L21 6L21 10L17 10ZM15 17L19 17L19 21L15 21ZM5 13L9 13L9 17L5 17ZM7 5L17 8M19 10L17 17M15 19L9 15M7 13L5 7");
}
</style><path class="oc3kr120r"/>`,
		"fallback": "keyline-icons:vector-distort-sharp",
	});
}

export default Component;
