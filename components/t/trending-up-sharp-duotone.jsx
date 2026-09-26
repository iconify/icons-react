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
		"content": `<style>.n2e4psbwx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.7071 17.2929L8.5 10.5L13.5 15.5L21.8243 7.1757M15 7L22 7L22 14");
}
</style><path class="n2e4psbwx"/>`,
		"fallback": "keyline-icons:trending-up-sharp-duotone",
	});
}

export default Component;
