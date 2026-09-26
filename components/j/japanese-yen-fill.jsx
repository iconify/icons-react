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
		"content": `<style>.yw3q61blm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L12 10L19 2M12 10L12 22M6 14L18 14M6 18L18 18");
}
</style><path class="yw3q61blm"/>`,
		"fallback": "keyline-icons:japanese-yen-fill",
	});
}

export default Component;
