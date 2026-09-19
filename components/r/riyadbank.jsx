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
		"content": `<style>.xqcs4gbrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 17.833V5.5H42.5");
}

.yun3zdbqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 30.167H42.5V5.5L30.167 17.833V42.5H5.5V17.833h12.333v12.333L5.5 42.499");
}
</style><path class="yun3zdbqw"/><path class="xqcs4gbrs"/>`,
		"fallback": "arcticons:riyadbank",
	});
}

export default Component;
