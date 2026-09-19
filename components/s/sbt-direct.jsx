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
		"content": `<style>.fg8whccal {
  cx: 34.708px;
  cy: 34.492px;
  r: 7.792px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ul4_m6cqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.084 34.492V5.716m5.832 28.776V14.465");
}

.vn93xx72a {
  cx: 13.292px;
  cy: 34.492px;
  r: 7.792px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vn93xx72a"/><circle class="fg8whccal"/><path class="ul4_m6cqi"/>`,
		"fallback": "arcticons:sbt-direct",
	});
}

export default Component;
