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
		"content": `<style>.amma0w12g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 34.29A28.79 28.79 0 0 0 13.71 5.5v28.79Z");
}

.k5t4wwb3g {
  cx: 19.322px;
  cy: 28.678px;
  r: 2.876px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sok56j3me {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.395 38.395a28.79 28.79 0 0 0-28.79-28.79v28.79Z");
}

.vvvu_5bqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.29 42.5A28.79 28.79 0 0 0 5.5 13.71V42.5Z");
}
</style><path class="vvvu_5bqs"/><path class="sok56j3me"/><path class="amma0w12g"/><circle class="k5t4wwb3g"/>`,
		"fallback": "arcticons:newsprovider",
	});
}

export default Component;
