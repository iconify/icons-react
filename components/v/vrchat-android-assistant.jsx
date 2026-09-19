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
		"content": `<style>.ofe-z1bvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.479 10.408v5.71l1.903 1.904h3.807l1.904-1.903v-5.711m3.1 7.613v-7.614h7.614m10.714.001h-7.614v7.614h7.614m-20.688 9.29v-4.625h4.625v4.625M17.833 25h4.625m3.084 2.312v-4.625h4.625v4.625M25.542 25h4.625");
}

.yo0um4bkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10 21h28v8H10z");
}

.zrlbsbl-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38 42.5l-9.25-9.25H5.5V5.5h37v27.75H38z");
}
</style><path class="ofe-z1bvu"/><path class="yo0um4bkr"/><path class="zrlbsbl-l"/>`,
		"fallback": "arcticons:vrchat-android-assistant",
	});
}

export default Component;
