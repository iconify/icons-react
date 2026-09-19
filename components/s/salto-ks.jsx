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
		"content": `<style>.d2s7ltrhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.388 16.67L39.5 22.888a7.962 7.962 0 0 1-3.962 14.87h-3.8");
}

.htl3ebkey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.77 17.12l2.427-3.775a6.76 6.76 0 0 1 5.687-3.104h5.854L22.426 24m9.313-13.759h11.454v3.981a4.4 4.4 0 0 1-4.4 4.4H31.19m4.585 11.14l-12.795-6.58");
}

.mc3wfcbxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 10.241h8.614v26.96H9.598A5.1 5.1 0 0 1 4.5 32.1zm8.614 13.397l9.079 14.121h9.545L13.114 10.241");
}

.oamghabdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.18 29.545a4.4 4.4 0 0 1 1.205-.167h6.635a4.19 4.19 0 1 1 0 8.38");
}
</style><path class="mc3wfcbxp"/><path class="htl3ebkey"/><path class="d2s7ltrhc"/><path class="oamghabdb"/>`,
		"fallback": "arcticons:salto-ks",
	});
}

export default Component;
