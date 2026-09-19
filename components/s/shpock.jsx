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
		"content": `<style>.ibzr30qxg {
  cx: 34.98px;
  cy: 13.021px;
  r: 7.52px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y9wy7ob-z {
  cx: 20.24px;
  cy: 27.76px;
  r: 14.74px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="y9wy7ob-z"/><circle class="ibzr30qxg"/>`,
		"fallback": "arcticons:shpock",
	});
}

export default Component;
