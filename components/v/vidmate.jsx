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
		"content": `<style>.en25u-4-m {
  d: path("m4.5 13.247l3.207-1.862h8.89l13.51 25.265L43.5 11.35h-8.89l-8.938 16.885");
}

.hkx60tjzd {
  d: path("M8.711 13.263L21.218 36.65h8.89M16.597 11.385zl-3.207 1.862H4.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="en25u-4-m"/><path class="hkx60tjzd"/></g>`,
		"fallback": "arcticons:vidmate",
	});
}

export default Component;
