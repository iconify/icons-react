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
		"content": `<style>.oxlm5f36e {
  fill: currentColor;
  d: path("M20.3 14.71a.996.996 0 0 0-1.41 0l-1.39 1.38l-1.39-1.38a.996.996 0 1 0-1.41 1.41l1.39 1.39l-1.39 1.39a.996.996 0 1 0 1.41 1.41l1.39-1.38l1.39 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.39l1.38-1.39a.996.996 0 0 0 0-1.41");
}

.wvc9svxvf {
  fill: currentColor;
  d: path("M23.21 8.24A16.87 16.87 0 0 0 12 4C7.7 4 3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l10.56 10.58c.19.19.45.29.7.29V14c0-1.1.9-2 2-2h6.99l2.29-2.29c.41-.41.38-1.08-.06-1.47");
}
</style><path class="wvc9svxvf"/><path class="oxlm5f36e"/>`,
		"fallback": "ic:round-signal-wifi-bad",
	});
}

export default Component;
