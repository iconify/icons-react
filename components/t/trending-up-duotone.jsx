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
		"content": `<style>.ks-6myb0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 17L8.5 10.5L13.5 15.5L21.4 7.6M16 7H21.5C21.7761 7 22 7.22386 22 7.5V13");
}
</style><path class="ks-6myb0s"/>`,
		"fallback": "keyline-icons:trending-up-duotone",
	});
}

export default Component;
