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
		"content": `<style>.w1d02fbxi {
  cx: 5.989px;
  cy: 37.922px;
  r: 0.923px;
  fill: currentColor;
}

.xjou20kqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.105 14.95l3.395-1.88l-.135 3.601M5.395 34.217c-1.097-4.613-1.9-13.011 2.085-12.506c3.456.438 8.57 9.916 12.008 10.378c2.303.31 2.764-2.569 2.6-7.498c-.243-7.304-.602-14.82 1.866-15.403c3.214-.76 8.94 12.151 12.58 13.217c1.965.575 2.905-2.556 6.966-9.335");
}
</style><path class="xjou20kqb"/><circle class="w1d02fbxi"/>`,
		"fallback": "arcticons:omo",
	});
}

export default Component;
