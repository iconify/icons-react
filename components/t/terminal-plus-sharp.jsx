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
		"content": `<style>.yoze06beq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.7191 4.7593L9.0001 11L1.6508 17.2993M19 19L10 19M19 4L19 12M15 8L23 8");
}
</style><path class="yoze06beq"/>`,
		"fallback": "keyline-icons:terminal-plus-sharp",
	});
}

export default Component;
