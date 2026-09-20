import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g7ipnac6i {
  d: path("m21 20 -6 -6V5");
}

.icp673bbo {
  d: path("M12 9v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pa9quik2g {
  d: path("M12 16v3");
}

.t1w08ccuz {
  d: path("m3 20 6 -6V5");
}
</style><g class="nrj6p8qat"><path class="t1w08ccuz"/><path class="g7ipnac6i"/><path class="icp673bbo"/><path class="pa9quik2g"/></g>`,
		"fallback": "iconmind:road-trip-outline-regular",
	});
}

export default Component;
