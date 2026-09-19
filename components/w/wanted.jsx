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
		"content": `<style>.nclauyb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 24H37a6.5 6.5 0 1 1-6.5 6.5V11h-13v11");
}

.vrkdxcbto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.5 24h-24l13 13V26");
}
</style><path class="nclauyb-k"/><path class="vrkdxcbto"/>`,
		"fallback": "arcticons:wanted",
	});
}

export default Component;
