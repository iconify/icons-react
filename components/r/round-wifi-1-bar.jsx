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
		"content": `<style>.l97nb-quh {
  cx: 12px;
  cy: 18px;
  r: 2px;
  fill: currentColor;
}
</style><circle class="l97nb-quh"/>`,
		"fallback": "ic:round-wifi-1-bar",
	});
}

export default Component;
