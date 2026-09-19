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
		"content": `<style>.c8ufofb0o {
  width: 17.608px;
  height: 17.608px;
  x: 4.5px;
  y: 15.196px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mk9je8b8g {
  width: 17.608px;
  height: 17.608px;
  x: 25.892px;
  y: 15.196px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="c8ufofb0o"/><rect class="mk9je8b8g"/>`,
		"fallback": "arcticons:pairz",
	});
}

export default Component;
