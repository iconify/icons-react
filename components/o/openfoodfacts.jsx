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

.l1j4fpt7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.82 41.19V28h8.31M11.08 41.19V28h8.58v17.06M2.5 24h8.58v17.19m17.16 3.87V20.45h8.58v20.74m-17.16 3.87V16h8.58v29.06");
}
</style><path class="l1j4fpt7l"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:openfoodfacts",
	});
}

export default Component;
