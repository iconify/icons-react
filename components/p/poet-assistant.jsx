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
		"content": `<style>.g1ya29duh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.063 4.5h-3a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4h3m0-39v39h20a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4z");
}

.w6tjgxuyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.766 29.5v-11h3.6c2.037 0 3.687 1.654 3.687 3.694s-1.65 3.694-3.686 3.694h-3.602m14.55-.032h-4.873M28.235 29.5l3.643-11l3.644 11");
}
</style><path class="g1ya29duh"/><path class="w6tjgxuyr"/>`,
		"fallback": "arcticons:poet-assistant",
	});
}

export default Component;
