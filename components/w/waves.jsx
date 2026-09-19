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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ujd0xyhfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.56 22.4c5.31 0 5.33 3.2 10.69 3.2s5.37-3.2 10.75-3.2s5.38 3.2 10.76 3.2s5.37-3.18 10.69-3.2M5.17 13.61c2.92.82 3.78 2.87 8.08 2.87c5.37 0 5.37-3.2 10.74-3.2s5.38 3.2 10.76 3.2c4.3 0 5.16-2.05 8.08-2.87M3.88 31.6c4 .5 4.5 3.12 9.37 3.12c5.37 0 5.37-3.2 10.74-3.2s5.38 3.2 10.76 3.2c4.87 0 5.33-2.63 9.37-3.12");
}
</style><circle class="cpk0fnbgt"/><path class="ujd0xyhfo"/>`,
		"fallback": "arcticons:waves",
	});
}

export default Component;
