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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ezmzk3byc {
  cx: 29.46px;
  cy: 30.37px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.28px;
  ry: 4.36px;
}

.yi3nh_bgc {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 15.85px;
  ry: 15.77px;
}
</style><ellipse class="ezmzk3byc"/><ellipse class="yi3nh_bgc"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:quasseldroid",
	});
}

export default Component;
