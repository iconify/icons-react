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
		"content": `<style>.cgl___bdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.224 22.462c2.515.932 4.026 2.433 4.407 5.065");
}

.g3bt-mb2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.978 35.933h24.726c11.295 0 10.13-17.755-2.285-15.717c0-11.214-20.195-11.214-20.195 2.246c-11.226-2.246-11.226 13.47-2.246 13.47z");
}
</style><path class="g3bt-mb2f"/><path class="cgl___bdn"/>`,
		"fallback": "arcticons:private-dns-quick-tile-modes",
	});
}

export default Component;
