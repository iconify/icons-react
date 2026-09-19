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
		"content": `<style>.b0phr5k0d {
  d: path("M39.207 24.21h-6.091l-5.167 12.706l-7.898-25.832l-5.167 12.706h-6.09");
}

.j8-rqqbmt {
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="j8-rqqbmt"/><path class="b0phr5k0d"/></g>`,
		"fallback": "arcticons:tv-browser",
	});
}

export default Component;
