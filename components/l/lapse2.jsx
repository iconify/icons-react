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
		"content": `<style>.axz5gw0ca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 29.46l10.09-4.85L24 7L13.91 24.61zM22.81 41v-9.11l-10.09-4.85L5 41zm2.38-9.11l10.09-4.85L43 41H25.19z");
}
</style><path class="axz5gw0ca"/>`,
		"fallback": "arcticons:lapse2",
	});
}

export default Component;
