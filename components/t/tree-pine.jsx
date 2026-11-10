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
		"content": `<style>.o4d11i3cv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 18H19L14 13H18L14 8H17L12 2L7 8H10L6 13H10L5 18H12ZM12 18V22");
}
</style><path class="o4d11i3cv"/>`,
		"fallback": "keyline-icons:tree-pine",
	});
}

export default Component;
