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
		"content": `<style>.nfk_92b-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 7.979L24 40.02L42.5 7.979z");
}

.pmfu13fck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 7.979l-30.833 10.68h24.667M30.167 29.34l-18.5-10.681");
}
</style><path class="nfk_92b-o"/><path class="pmfu13fck"/>`,
		"fallback": "arcticons:vivid-seats",
	});
}

export default Component;
