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
		"content": `<style>.i6-rxobio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24h15.39l7.5 7.7h8.6L43.5 24l-7.51-7.7");
}

.v1vhinbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24H30.39l-7.5-7.7H12.01L4.5 24l7.51 7.7");
}
</style><path class="i6-rxobio"/><path class="v1vhinbbe"/>`,
		"fallback": "arcticons:ns",
	});
}

export default Component;
