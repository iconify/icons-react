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
		"content": `<style>.pccdsbc0n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20L20 22L4 22L4 4M15.6465 15.6465C15.0188 17.0343 13.6222 18 12 18C9.7909 18 8 16.2091 8 14C8 12.3778 8.9657 10.9812 10.3535 10.3535M6.6569 2L20 2L20 15.3431M10.6569 6L17 6M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="pccdsbc0n"/>`,
		"fallback": "keyline-icons:washing-machine-off-sharp",
	});
}

export default Component;
