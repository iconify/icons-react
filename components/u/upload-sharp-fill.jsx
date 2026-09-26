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
		"content": `<style>.apgp81bsp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15L12 3M7.7071 7.2929L12 3L16.2929 7.2929M4 17L4 21L20 21L20 17");
}
</style><path class="apgp81bsp"/>`,
		"fallback": "keyline-icons:upload-sharp-fill",
	});
}

export default Component;
