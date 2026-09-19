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

.fkc3t6iiu {
  fill: currentColor;
  d: path("M12 2c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4m5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99m.34 2V10H6V6.99zm-.34 9.74l-.29.27H6.63l-.29-.27A.97.97 0 0 1 6 16v-4h12v4c0 .37-.21.62-.34.73");
}

.iw6nvx_mx {
  cx: 8.5px;
  cy: 14.5px;
  r: 1.5px;
  fill: currentColor;
}
</style><path class="fkc3t6iiu"/><circle class="iw6nvx_mx"/><circle class="cbwjarblr"/>`,
		"fallback": "ic:outline-directions-bus",
	});
}

export default Component;
