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
		"content": `<style>.s2_5fxp3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 32.597V15.403l8.597 17.194l8.598-17.194v17.194m4.137-3.755v3.756H43v-3.756");
}

.vjiavwb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.264 23.262l6.134 6.116l6.492-6.116h-3.684v-6.903H31.59v6.903Z");
}
</style><path class="s2_5fxp3u"/><path class="vjiavwb4d"/>`,
		"fallback": "arcticons:markdownr",
	});
}

export default Component;
