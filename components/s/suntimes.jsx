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
		"content": `<style>.sykhp2byj {
  cx: 24px;
  cy: 24px;
  r: 22px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xr26jxbqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2 24h44");
}
</style><circle class="sykhp2byj"/><path class="xr26jxbqf"/>`,
		"fallback": "arcticons:suntimes",
	});
}

export default Component;
