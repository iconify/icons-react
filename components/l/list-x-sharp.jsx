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
		"content": `<style>.xfmbv0bgy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 4L23 4M1 11L23 11M1 18L7 18M9 18L15 18M17.7071 15.7071L22.2929 20.2929M22.2929 15.7071L17.7071 20.2929");
}
</style><path class="xfmbv0bgy"/>`,
		"fallback": "keyline-icons:list-x-sharp",
	});
}

export default Component;
