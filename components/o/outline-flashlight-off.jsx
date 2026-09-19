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
		"content": `<style>.ni1ltcqyw {
  fill: currentColor;
  d: path("M2.81 2.81L1.39 4.22L8 10.83V22h8v-3.17l3.78 3.78l1.41-1.41zM14 20h-4v-7.17l4 4zm2-16v1H7.83l2 2H16v.39l-2 3.01v.77l2 2V11l2-3V2H6v1.17l.83.83z");
}
</style><path class="ni1ltcqyw"/>`,
		"fallback": "ic:outline-flashlight-off",
	});
}

export default Component;
