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
		"content": `<style>.pzn2p8bit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.51 35.7L24 27.9l13.51-7.8M24 12.3L10.49 4.5v15.6M24 12.3v31.2");
}

.vz-88pbxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.49 35.7L24 27.9l-13.51-7.8L24 12.3l13.51 7.8v15.6L24 43.5z");
}
</style><path class="vz-88pbxp"/><path class="pzn2p8bit"/>`,
		"fallback": "arcticons:my-robi",
	});
}

export default Component;
