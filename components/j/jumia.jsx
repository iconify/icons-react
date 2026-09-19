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

.mp9dswbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 7.783l4.944 10.018L40 19.408l-8 7.798l1.889 11.011L24 33.018l-9.889 5.199L16 27.206l-8-7.798l11.056-1.607z");
}
</style><path class="mp9dswbvq"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:jumia",
	});
}

export default Component;
