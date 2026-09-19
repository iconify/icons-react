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
		"content": `<style>.ocjulabft {
  cx: 24px;
  cy: 24px;
  r: 13.6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p5796tbhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.6 37.6l4.3 4.6c.4.4.6.8.6 1.4c0 1.1-.9 1.9-1.9 1.9H24C12.1 45.5 2.5 35.9 2.5 24S12.1 2.5 24 2.5S45.5 12.1 45.5 24c0 5.2-1.8 9.9-4.9 13.6");
}
</style><circle class="ocjulabft"/><path class="p5796tbhb"/>`,
		"fallback": "arcticons:quora",
	});
}

export default Component;
