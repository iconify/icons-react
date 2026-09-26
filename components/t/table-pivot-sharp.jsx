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
		"content": `<style>.lebb7lxjj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8L20 8L20 2L2 2L2 20L8 20L8 8M20 12L20 20L12 20M17.7071 14.2929L20 12L22.2929 14.2929M14.2929 17.7071L12 20L14.2929 22.2929");
}
</style><path class="lebb7lxjj"/>`,
		"fallback": "keyline-icons:table-pivot-sharp",
	});
}

export default Component;
