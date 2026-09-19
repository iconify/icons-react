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
		"content": `<style>.e1h_wgboj {
  fill: none;
  stroke: currentColor;
  d: path("M29.997 26.098H27.82a2.18 2.18 0 0 0-1.708.827l-1.457 1.84a.834.834 0 0 1-1.308 0l-1.456-1.84a2.18 2.18 0 0 0-1.708-.827h-2.179a.61.61 0 0 1-.527-.913l5.998-10.4a.608.608 0 0 1 1.053 0l5.998 10.4a.61.61 0 0 1-.528.913Z");
}

.kagbt-5rr {
  fill: none;
  stroke: currentColor;
  d: path("M43.5 23.52V11.834a4.216 4.216 0 0 0-4.216-4.216H8.716A4.216 4.216 0 0 0 4.5 11.834V23.52a8.22 8.22 0 0 0 3.425 6.676l12.65 9.084a5.87 5.87 0 0 0 6.85 0l12.65-9.084A8.22 8.22 0 0 0 43.5 23.52Z");
}
</style><path class="kagbt-5rr"/><path class="e1h_wgboj"/>`,
		"fallback": "arcticons:trabeepocket",
	});
}

export default Component;
