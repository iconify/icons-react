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
		"content": `<style>.nu-bbtm7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.657 29.377V18.623h3.521c1.99 0 3.604 1.617 3.604 3.611s-1.613 3.612-3.604 3.612h-3.52m8.785-7.223h7.125m-3.562 10.754V18.623m13.494 0l-3.562 10.754l-3.563-10.754");
}

.qe2d1lhtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 13.123v10.754");
}
</style><path class="qe2d1lhtt"/><path class="nu-bbtm7q"/>`,
		"fallback": "arcticons:iptv-pro",
	});
}

export default Component;
