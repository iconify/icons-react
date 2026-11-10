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
		"content": `<style>.a3zkkth7d {
  d: path("M5.5 5.5h37v37h-37zm12.333 0v37m12.334-37v37M5.5 17.833h37m-37 12.334h37");
}

.a6vsl4bxw {
  cx: 36.333px;
  cy: 24px;
  r: 4.111px;
}

.l8hng958o {
  cx: 11.667px;
  cy: 36.333px;
  r: 4.111px;
}

.lbm7uzb1v {
  cx: 11.667px;
  cy: 11.667px;
  r: 4.111px;
}

.rvsp5pbah {
  cx: 24px;
  cy: 36.333px;
  r: 4.111px;
}

.to-5kdesz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
}

.v5ulr70eg {
  cx: 11.667px;
  cy: 24px;
  r: 4.111px;
}
</style><g class="to-5kdesz"><path class="a3zkkth7d"/><circle class="v5ulr70eg"/><circle class="l8hng958o"/><circle class="rvsp5pbah"/><circle class="lbm7uzb1v"/><circle class="a6vsl4bxw"/></g>`,
		"fallback": "arcticons:leinelapp",
	});
}

export default Component;
