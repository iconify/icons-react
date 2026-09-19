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
		"content": `<style>.bzn9l8baq {
  cx: 32.419px;
  cy: 14.064px;
  r: 4.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w79rg6i4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.59 38.103h13.52V25.397s-2.225-4.762-6.55-4.774c-4.56-.012-6.97 4.774-6.97 4.774zm-1.963-22.248l-12.485.002c-4.02 0-6.541 13.082 4.451 12.87c7.175-.138 7.955-4.159 7.955-5.323z");
}
</style><circle class="bzn9l8baq"/><path class="w79rg6i4j"/>`,
		"fallback": "arcticons:spacehey-mobile",
	});
}

export default Component;
