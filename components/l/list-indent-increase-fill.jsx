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
		"content": `<style>.gxy3148fj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L8 12M5 9L8 12L5 15M12 6L22 6M12 12L22 12M12 18L22 18");
}
</style><path class="gxy3148fj"/>`,
		"fallback": "keyline-icons:list-indent-increase-fill",
	});
}

export default Component;
