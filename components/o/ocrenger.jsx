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
		"content": `<style>.b7ypiyfsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.5 33h7v9.5h-7zm-4.25-18.648v7.818l6.44 3.599a2.69 2.69 180 0 0 2.62 0l12.88-7.197a2.56 2.56 120.4 0 0 1.31-2.232v-4.818a.88.88 30.404 0 0-1.31-.768L25.31 17.95a2.69 2.69 180 0 1-2.62 0zm-3.875 5.653v-7.818L9.81 10.753a.88.88 149.6 0 0-1.31.769v4.818a2.56 2.56 59.596 0 0 1.31 2.232zm1.746.976v-7.818");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.tiv42jt8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 29.555h37M13.5 33h21v9.5h-21z");
}
</style><rect class="j3s9ivbxi"/><path class="tiv42jt8v"/><path class="b7ypiyfsi"/>`,
		"fallback": "arcticons:ocrenger",
	});
}

export default Component;
