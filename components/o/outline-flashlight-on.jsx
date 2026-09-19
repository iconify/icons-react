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
		"content": `<style>.mk09fccfu {
  fill: currentColor;
  d: path("M18 2H6v6l2 3v11h8V11l2-3zm-2 2v1H8V4zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39z");
}

.xzditrbqy {
  cx: 12px;
  cy: 14px;
  r: 1.5px;
  fill: currentColor;
}
</style><path class="mk09fccfu"/><circle class="xzditrbqy"/>`,
		"fallback": "ic:outline-flashlight-on",
	});
}

export default Component;
