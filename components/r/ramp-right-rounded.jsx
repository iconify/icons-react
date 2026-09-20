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
		"content": `<style>.ku1bdsbcm {
  fill: currentColor;
  d: path("M11.288 20.713Q11 20.425 11 20v-5.3q-.7.95-1.588 1.8T7.4 18.125q-.4.275-.862.25T5.725 18q-.275-.275-.187-.687T6 16.65q1.575-1.05 3.288-2.987T11 9V6.825l-.9.875q-.275.275-.7.275T8.7 7.7q-.3-.3-.287-.713T8.7 6.3l2.6-2.6q.15-.15.325-.212T12 3.425t.375.063t.325.212l2.6 2.6q.275.275.275.7t-.275.7q-.3.3-.713.3t-.687-.275l-.9-.9V20q0 .425-.288.713T12 21t-.712-.288");
}
</style><path class="ku1bdsbcm"/>`,
		"fallback": "material-symbols:ramp-right-rounded",
	});
}

export default Component;
