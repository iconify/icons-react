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
		"content": `<style>.kpk53t-ak {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6.8477L12 12M12 12L22 6.8477M7 4.4239L17 9.4239M12 12L12 22L2 17.1523L2 6.8477L12 2L22 6.8477L22 13M19 15L19 22M15.7071 18.7071L19 22L22.2929 18.7071");
}
</style><path class="kpk53t-ak"/>`,
		"fallback": "keyline-icons:package-arrow-down-sharp",
	});
}

export default Component;
