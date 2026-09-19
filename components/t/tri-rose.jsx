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
		"content": `<style>.b68dvibba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.227 15.28A17.24 17.24 0 0 0 24 26.059a17.28 17.28 0 0 0 0-21.555a17.24 17.24 0 0 0-3.773 10.778");
}

.dcv9lbcaf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.718 36.995A17.24 17.24 0 0 0 24 26.058a17.28 17.28 0 0 0-12.67 17.439a17.24 17.24 0 0 0 9.388-6.502");
}

.g6_f550cw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.388 32.56A17.24 17.24 0 0 0 24 26.058a17.28 17.28 0 0 0 12.67 17.439a17.24 17.24 0 0 0-3.282-10.937");
}

.mqxcs32ev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.584 26.317A17.24 17.24 0 0 0 24 26.058a17.28 17.28 0 0 0-20.5-6.66a17.24 17.24 0 0 0 9.084 6.919");
}

.u4xgf9b_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.084 19.14A17.24 17.24 0 0 0 24 26.057a17.28 17.28 0 0 0 20.5-6.66a17.24 17.24 0 0 0-11.416-.259");
}
</style><path class="u4xgf9b_v"/><path class="g6_f550cw"/><path class="dcv9lbcaf"/><path class="mqxcs32ev"/><path class="b68dvibba"/>`,
		"fallback": "arcticons:tri-rose",
	});
}

export default Component;
