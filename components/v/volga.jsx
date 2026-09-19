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

.o9wwlmb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.745 27.184C8.526 26.662 19.092 23.001 24 14.5c4.908 8.501 15.473 12.162 21.255 12.684");
}

.obzxddb4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.257 36.091C12.134 34.694 19.972 30.977 24 24c4.028 6.977 11.866 10.694 17.743 12.091");
}

.qjg7w4q2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.51 17.6C9.419 16.841 19.3 13.139 24 5c4.71 8.159 14.632 11.86 20.534 12.606");
}
</style><circle class="cpk0fnbgt"/><path class="obzxddb4j"/><path class="o9wwlmb3l"/><path class="qjg7w4q2c"/>`,
		"fallback": "arcticons:volga",
	});
}

export default Component;
