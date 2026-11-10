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
		"content": `<style>.zj6y9i7fh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 19C20 17.34 18.657 16 17 16H15C13.343 16 12 17.34 12 19M20 19C20 20.66 18.657 22 17 22H15C13.343 22 12 20.66 12 19M20 19H23M12 19H1M2 2V12H22V2H2Z");
}
</style><path class="zj6y9i7fh"/>`,
		"fallback": "keyline-icons:slider-horizontal-sharp",
	});
}

export default Component;
