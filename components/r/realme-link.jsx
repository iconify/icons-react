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
		"content": `<style>.bw-1m4hnh {
  cx: 24px;
  cy: 24px;
  r: 12.443px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s7xqaugqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.749 21.82L16.297 4.5m-4.548 17.32L11.557 24m24.694 2.18L31.703 43.5");
}
</style><circle class="bw-1m4hnh"/><path class="s7xqaugqi"/>`,
		"fallback": "arcticons:realme-link",
	});
}

export default Component;
