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
		"content": `<style>.b9q52mbkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.637 43.5V29.225L36.362 43.5V29.225z");
}

.fbtpd61jd {
  cx: 24px;
  cy: 16.863px;
  r: 4.121px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.snngwacrp {
  cx: 24px;
  cy: 16.863px;
  r: 12.363px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="snngwacrp"/><circle class="fbtpd61jd"/><path class="b9q52mbkz"/>`,
		"fallback": "arcticons:mister-donut-alt-1",
	});
}

export default Component;
