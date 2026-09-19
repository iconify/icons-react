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
		"content": `<style>.hmq8ctw6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.735 15.224L24 26.072L9.265 15.224");
}

.ktu0bwb7d {
  width: 39px;
  height: 26.582px;
  x: 4.5px;
  y: 10.709px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="hmq8ctw6v"/><rect class="ktu0bwb7d"/>`,
		"fallback": "arcticons:mail",
	});
}

export default Component;
