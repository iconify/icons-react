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
		"content": `<style>.dn2mlw9xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.125 11.375h5.75C33.848 11.375 39.5 17.027 39.5 24h0c0 6.973-5.652 12.625-12.625 12.625h-5.75C14.152 36.625 8.5 30.973 8.5 24h0c0-6.973 5.652-12.625 12.625-12.625m5.75 0H43.5m-22.375 25.25H4.5");
}
</style><path class="dn2mlw9xi"/>`,
		"fallback": "arcticons:transports-publics-genevois",
	});
}

export default Component;
