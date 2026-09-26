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
		"content": `<style>.i2e8exbyx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.7071 12.2929L7 7L12 12L21.8243 2.1757M14.5355 14.5355L21.8243 21.8243M15 2L22 2L22 9M15 22L22 22L22 15");
}
</style><path class="i2e8exbyx"/>`,
		"fallback": "keyline-icons:trending-up-down-sharp",
	});
}

export default Component;
