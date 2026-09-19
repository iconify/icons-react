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
		"content": `<style>.lkqxcyguc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5V19m0 9.75V43.5m4.75-33v8.558m0 9.75V37.5m-9.5-30v11.612m0 9.75V40M10 25c2.072-.555 9.25-1 14-1s11.928.195 14 .75m-28 5c2.072-.555 9.25-1 14-1s11.928.195 14 .75M10 20c2.072-.555 9.25-1 14-1s11.928.195 14 .75");
}
</style><path class="lkqxcyguc"/>`,
		"fallback": "arcticons:theopolis",
	});
}

export default Component;
