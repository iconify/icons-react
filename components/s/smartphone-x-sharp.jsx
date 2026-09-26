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
		"content": `<style>.d_hs7szqz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13L19 2L5 2L5 22L10 22M19.2929 15.7071L12.7071 22.2929M12.7071 15.7071L19.2929 22.2929M14.5 6L9.5 6");
}
</style><path class="d_hs7szqz"/>`,
		"fallback": "keyline-icons:smartphone-x-sharp",
	});
}

export default Component;
