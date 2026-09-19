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
		"content": `<style>.b7ytelbju {
  width: 29.97px;
  height: 29.97px;
  x: 9.02px;
  y: 9.02px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.ffg7wlbuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.83 37.02V15.16H31.8v7.71L16.74 37.93m17.84-3.32l-7.26-7.25");
}
</style><rect transform="rotate(45 23.999 24)" class="b7ytelbju"/><path class="ffg7wlbuc"/>`,
		"fallback": "arcticons:kodiremote",
	});
}

export default Component;
