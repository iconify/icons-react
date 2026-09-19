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
		"content": `<style>.v2pa4rwbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.939 35.434L24 27.758l-12.939 7.676m25.878-8.246l-5.856-3.474");
}

.v43k4reep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.061 27.188l5.856-3.474M24 27.758l12.939-7.388v15.064l6.561-4.102V16.476l-6.561-3.91L24 20.146l-12.939-7.58l-6.561 3.91v14.856l6.561 4.102V20.37z");
}
</style><path class="v43k4reep"/><path class="v2pa4rwbu"/>`,
		"fallback": "arcticons:medal-tv",
	});
}

export default Component;
