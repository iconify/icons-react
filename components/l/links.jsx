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
		"content": `<style>.pfoiixbsg {
  cx: 17.745px;
  cy: 16.846px;
  r: 11.346px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r3d_mqsdg {
  cx: 30.255px;
  cy: 31.154px;
  r: 11.346px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="pfoiixbsg"/><circle class="r3d_mqsdg"/>`,
		"fallback": "arcticons:links",
	});
}

export default Component;
