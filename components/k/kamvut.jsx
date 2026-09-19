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
		"content": `<style>.but1twbmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 10.403a37 37 0 0 1 37 0L24 42.554z");
}

.rq7ktlboa {
  cx: 18.259px;
  cy: 12.954px;
  r: 3.828px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tmqmg9cny {
  cx: 24px;
  cy: 24.054px;
  r: 3.828px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="but1twbmq"/><circle class="rq7ktlboa"/><circle class="tmqmg9cny"/>`,
		"fallback": "arcticons:kamvut",
	});
}

export default Component;
