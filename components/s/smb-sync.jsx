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
		"content": `<style>.cdvrldbpt {
  width: 23.478px;
  height: 39px;
  x: 12.261px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.062px;
}

.ela7etb7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.261 8.88h23.478M12.261 39.12h23.478M25.14 29.843a5.95 5.95 0 0 0 3.068-10.048m-5.34-1.639a5.962 5.962 0 0 0-3.076 10.055m7.768-7.768l-1.585 1.585v-4.356l4.348.008l-1.577 1.577zm-7.112 7.112l1.577-1.577l.008 4.349h-4.357l1.585-1.585z");
}
</style><rect class="cdvrldbpt"/><path class="ela7etb7u"/>`,
		"fallback": "arcticons:smb-sync",
	});
}

export default Component;
