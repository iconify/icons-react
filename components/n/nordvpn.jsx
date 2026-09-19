import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.evv5-latg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.59 36.89A21.71 21.71 0 0 1 24 2.5a21.71 21.71 0 0 1 17.41 34.39L31.08 20l-1.86 3.17l1.88 3.23L24 14.17l-5.27 9l1.9 3.27L16.91 20Z");
}
</style><path class="evv5-latg"/>`,
		"fallback": "arcticons:nordvpn",
	});
}

export default Component;
