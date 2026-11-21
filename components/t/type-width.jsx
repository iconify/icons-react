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
		"content": `<style>.iz56p_piq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 5V4C4 2.8954 4.8954 2 6 2H18C19.1046 2 20 2.8954 20 4V5M12 2V12M8.5 12H15.5M20 19H4M17 16L20 19L17 22M7 16L4 19L7 22");
}
</style><path class="iz56p_piq"/>`,
		"fallback": "keyline-icons:type-width",
	});
}

export default Component;
