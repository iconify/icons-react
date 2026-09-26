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
		"content": `<style>.kfnhi005r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1L12 7M15.5355 8.4645L19.7782 4.2218M17 12L23 12M15.5355 15.5355L19.7782 19.7782M12 17L12 23M8.4645 15.5355L4.2218 19.7782M1 12L7 12M8.4645 8.4645L4.2218 4.2218");
}
</style><path class="kfnhi005r"/>`,
		"fallback": "keyline-icons:loader-sharp",
	});
}

export default Component;
