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
		"content": `<style>.cjr_sf4wu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 43.142l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.drztn1bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 35.086l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.mjd6lfpmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 39.114l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}
</style><path class="mjd6lfpmr"/><path class="cjr_sf4wu"/><path class="drztn1bgm"/>`,
		"fallback": "arcticons:librephotosmobile",
	});
}

export default Component;
