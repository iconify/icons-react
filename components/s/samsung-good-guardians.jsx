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
		"content": `<style>.beqsa12ge {
  cx: 33.25px;
  cy: 14.75px;
  r: 9.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.owuya9-re {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24h18.5v18.5H24zm0 18.5C13.783 42.5 5.5 34.217 5.5 24H24zM5.5 24C5.5 13.783 13.783 5.5 24 5.5V24z");
}
</style><circle class="beqsa12ge"/><path class="owuya9-re"/>`,
		"fallback": "arcticons:samsung-good-guardians",
	});
}

export default Component;
