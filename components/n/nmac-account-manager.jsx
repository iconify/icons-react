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
		"content": `<style>.bxuojh13j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5S45.5 35.874 45.5 24h-7c0 8.008-6.492 14.5-14.5 14.5S9.5 32.008 9.5 24S15.992 9.5 24 9.5z");
}

.mzbccji_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29 3.092V19h15.908A21.5 21.5 0 0 0 29 3.092");
}
</style><path class="bxuojh13j"/><path class="mzbccji_z"/>`,
		"fallback": "arcticons:nmac-account-manager",
	});
}

export default Component;
