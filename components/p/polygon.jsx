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
		"content": `<style>.c23pli_oz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5v13h13zm0 0v13H11zm0 26v-13H11zm0 13v-13H11zm0-13v-13h13z");
}

.fztiq44oj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 17.5v13h13z");
}
</style><path class="c23pli_oz"/><path class="fztiq44oj"/>`,
		"fallback": "arcticons:polygon",
	});
}

export default Component;
