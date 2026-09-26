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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.mc88-cbaw {
  stroke-opacity: 0.4;
  d: path("M12 17L12 23M8.4645 15.5355L4.2218 19.7782M1 12L7 12M8.4645 8.4645L4.2218 4.2218");
}

.mr-903blt {
  d: path("M12 1L12 7M15.5355 8.4645L19.7782 4.2218M17 12L23 12M15.5355 15.5355L19.7782 19.7782");
}
</style><g class="gp_8x1bzb"><path class="mc88-cbaw"/><path class="mr-903blt"/></g>`,
		"fallback": "keyline-icons:loader-sharp-duotone",
	});
}

export default Component;
