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
		"content": `<style>.t361nh1vl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6L10 6M6.7071 2.7071L10 6L6.7071 9.2929M22 6L14 6M17.2929 2.7071L14 6L17.2929 9.2929M6 12L6 22M12 12L12 22M18 12L18 22");
}
</style><path class="t361nh1vl"/>`,
		"fallback": "keyline-icons:list-collapse-horizontal-sharp-fill",
	});
}

export default Component;
