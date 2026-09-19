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
		"content": `<style>.k1cmpccmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.187 5.5h-4.625v2.312H33.25v2.313h-2.313v2.312h-2.312v2.313h-2.313v2.312H24v2.313h-2.313v2.313h-2.312v4.624h2.312v2.313h4.625v-2.313h2.313V24h2.312v-2.312h2.313v-2.313h2.312v-2.313h2.313V14.75h2.312v-2.313H42.5V5.5zM14.75 30.937h-2.313v2.313h-2.312h0v2.312H5.5V42.5h6.937v-4.625h2.313v-2.313h2.312v-4.625z");
}

.z8_a0ii5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 28.625v2.312h2.312v2.313h2.313v2.312H24v2.313h4.625V33.25h-2.313v-2.313H24v-2.312h-2.313v-2.313h-2.312v-2.273h-2.313v-2.313H14.75v-2.273h-4.625v4.586h2.312v4.586z");
}
</style><path class="z8_a0ii5m"/><path class="k1cmpccmm"/>`,
		"fallback": "arcticons:minecraft-sword",
	});
}

export default Component;
