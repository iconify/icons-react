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
		"content": `<style>.br2877b6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.333 39.167h17.334m-5.826-22.506c-3.25-2.785-6.213-.414-6.131 1.749c.146 3.859 6.384 3.238 6.5 6.5c.113 3.193-2.78 5.017-6.234 3.076");
}

.m7vpybc3z {
  width: 39px;
  height: 26px;
  x: 4.5px;
  y: 8.833px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.333px;
  ry: 4.333px;
}
</style><rect class="m7vpybc3z"/><path class="br2877b6r"/>`,
		"fallback": "arcticons:smarttube",
	});
}

export default Component;
