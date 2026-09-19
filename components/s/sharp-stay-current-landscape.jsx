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
		"content": `<style>.it8s0_guq {
  fill: currentColor;
  d: path("M1 19h22V5H1zM19 7v10H5V7z");
}
</style><path class="it8s0_guq"/>`,
		"fallback": "ic:sharp-stay-current-landscape",
	});
}

export default Component;
