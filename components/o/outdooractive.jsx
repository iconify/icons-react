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
		"content": `<style>.ewon5lm0g {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 8.81px;
  ry: 11.691px;
}

.tjfqwg1py {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.834px;
  ry: 19.5px;
}
</style><ellipse class="tjfqwg1py"/><ellipse class="ewon5lm0g"/>`,
		"fallback": "arcticons:outdooractive",
	});
}

export default Component;
