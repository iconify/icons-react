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
		"content": `<style>.pv53mbc5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.181 17.278L43.5 24h-9.319");
}

.u0vf6l23a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.394 12.382v9.792l-6.788-4.896l-6.787-4.896V24H4.5l9.319 6.722l6.787 4.896v-9.792l6.788 4.896l6.787 4.896v-18.34z");
}
</style><path class="u0vf6l23a"/><path class="pv53mbc5m"/>`,
		"fallback": "arcticons:nothing-icons",
	});
}

export default Component;
