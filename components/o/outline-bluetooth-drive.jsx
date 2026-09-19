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
		"content": `<style>.cbwjarblr {
  cx: 15.5px;
  cy: 14.5px;
  r: 1.5px;
  fill: currentColor;
}

.drdla2-9e {
  cx: 6.5px;
  cy: 14.5px;
  r: 1.5px;
  fill: currentColor;
}

.kk-9vgbuw {
  fill: currentColor;
  d: path("M22 3.85L19.15 1h-.5v3.79l-2.3-2.29l-.7.7L18.44 6l-2.79 2.79l.7.71l2.3-2.3V11h.5L22 8.14L19.85 6zm-2.35-.94l.94.94l-.94.94zm.94 5.23l-.94.94V7.2z");
}

.rthicysuw {
  fill: currentColor;
  d: path("M18 17H4v-5h11v-2H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8h-2z");
}
</style><circle class="drdla2-9e"/><circle class="cbwjarblr"/><path class="rthicysuw"/><path class="kk-9vgbuw"/>`,
		"fallback": "ic:outline-bluetooth-drive",
	});
}

export default Component;
