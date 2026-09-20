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
		"content": `<style>.cdpqd_bya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.364 24.079v7.4h7.4");
}

.d_4gau5sg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.364 24.079a7.4 7.4 0 0 1 7.4-7.4a7.4 7.4 0 0 1 7.4 7.4a7.4 7.4 0 0 1-7.4 7.4");
}

.prgvtl7pl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24v18.5H24");
}

.q2yv-wrex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24A18.5 18.5 0 0 1 24 5.5A18.5 18.5 0 0 1 42.5 24A18.5 18.5 0 0 1 24 42.5");
}
</style><path class="cdpqd_bya"/><path class="d_4gau5sg"/><path class="q2yv-wrex"/><path class="prgvtl7pl"/>`,
		"fallback": "arcticons:reolink",
	});
}

export default Component;
