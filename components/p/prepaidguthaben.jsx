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
		"content": `<style>.fv763l4rj {
  cx: 29.88px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.62px;
  ry: 13.633px;
}

.ohaqbvdwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.12 37.633A13.626 13.626 0 0 1 4.5 24h0a13.626 13.626 0 0 1 13.62-13.633");
}
</style><ellipse class="fv763l4rj"/><path class="ohaqbvdwm"/>`,
		"fallback": "arcticons:prepaidguthaben",
	});
}

export default Component;
