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
		"content": `<style>.fdl-f1bvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 7.473v33.054l25.472-16.568z");
}

.s1sh7sbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.819 19.106L42.5 7.473v33.054L23.819 28.569");
}
</style><path class="fdl-f1bvu"/><path class="s1sh7sbgk"/>`,
		"fallback": "arcticons:kmplayer",
	});
}

export default Component;
