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
		"content": `<style>.hmgozgbuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 42.5L5.5 30.366V5.5l9.25 12.134zm9.25 0l-9.25-12.134V5.5L24 17.634zm9.25 0L24 30.366V5.5l9.25 12.134zm9.25 0l-9.25-12.134V5.5l9.25 12.134z");
}
</style><path class="hmgozgbuo"/>`,
		"fallback": "arcticons:padland",
	});
}

export default Component;
