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
		"content": `<style>.qt22b3btg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.079 20.702a17.2 17.2 0 0 0-4.782-9.008a17.46 17.46 0 0 0-24.625 0M6.89 27.32a17.423 17.423 0 0 0 29.406 8.976");
}

.uhm-f7biu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.121 10.149l3.458 3.455l4.621 4.617H5.5V5.5zm24.3 24.279l-4.653-4.649H42.5V42.5l-4.621-4.617z");
}
</style><path class="qt22b3btg"/><path class="uhm-f7biu"/>`,
		"fallback": "arcticons:scanmediaplz",
	});
}

export default Component;
