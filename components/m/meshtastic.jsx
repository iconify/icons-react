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
		"content": `<style>.zzrqoqm8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 32.667l13-17.334m26 17.334l-13-17.334l-13 17.334");
}
</style><path class="zzrqoqm8m"/>`,
		"fallback": "arcticons:meshtastic",
	});
}

export default Component;
