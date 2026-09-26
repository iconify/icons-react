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
		"content": `<style>.bt9nrkbjv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 7L21 7M3 16L6 16M21 16L18 16M12 10L12 17M8.7071 13.7071L12 17L15.2929 13.7071");
}
</style><path class="bt9nrkbjv"/>`,
		"fallback": "keyline-icons:table-rows-merge-next-sharp",
	});
}

export default Component;
