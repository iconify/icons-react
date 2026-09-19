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
		"content": `<style>.c78la1bmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24a18.5 18.5 0 0 0 37 0H30.016a6.016 6.016 0 0 1-12.032 0ZM24 5.5h18.251v12.484H24z");
}

.n66gzcbke {
  cx: 11.742px;
  cy: 11.742px;
  r: 6.242px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="c78la1bmh"/><circle class="n66gzcbke"/>`,
		"fallback": "arcticons:nicehash",
	});
}

export default Component;
