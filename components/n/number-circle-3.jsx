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
		"content": `<style>.bss894joo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.202 30.65c1.104.926 2.297 1.35 4.975 1.35h.624a4 4 0 0 0 3.999-4h0a4 4 0 0 0-4-3.998m-5.6-6.666c1.107-.922 2.3-1.343 4.979-1.336l.622.004a4 4 0 0 1 3.999 3.999h0a4 4 0 0 1-4 3.999m-3.073 0h3.074");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="bss894joo"/>`,
		"fallback": "arcticons:number-circle-3",
	});
}

export default Component;
