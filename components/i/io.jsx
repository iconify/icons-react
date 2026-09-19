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
		"content": `<style>.f2u3p_sgi {
  cx: 7.78px;
  cy: 11.922px;
  r: 3.28px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i3wjx5b6h {
  width: 6.561px;
  height: 20.047px;
  x: 4.5px;
  y: 19.311px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.28px;
}

.vv2x70_ud {
  cx: 30.597px;
  cy: 26.455px;
  r: 12.903px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vv2x70_ud"/><rect class="i3wjx5b6h"/><circle class="f2u3p_sgi"/>`,
		"fallback": "arcticons:io",
	});
}

export default Component;
