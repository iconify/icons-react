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
		"content": `<style>.bstvpacux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.84 17l-9.42 3.6L24 17");
}

.tq1i92bbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 25.26L24 32.71l19.5-7.45");
}

.uc7a3fbbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 15.32L24 13L4.5 20.49L24 27.94l19.5-7.45m-10.08-9.96v10.08");
}

.yex_g2bpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 30.07L24 37.52l19.5-7.45");
}
</style><path class="yex_g2bpq"/><path class="tq1i92bbt"/><path class="uc7a3fbbo"/><path class="bstvpacux"/>`,
		"fallback": "arcticons:oandbackupx",
	});
}

export default Component;
