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
		"content": `<style>.mvnqavb5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 7.5v.625a2 2 135 0 1-2 2h-.625a2 2 135 0 0-2 2v.625a2 2 135 0 1-2 2H7.5a2 2 135 0 0-2 2v14.5a2 2 45 0 0 2 2h.625a2 2 45 0 1 2 2v.625a2 2 45 0 0 2 2h.625a2 2 45 0 1 2 2v.625a2 2 45 0 0 2 2h14.5a2 2 135 0 0 2-2v-.625a2 2 135 0 1 2-2h.625a2 2 135 0 0 2-2v-.625a2 2 135 0 1 2-2h.625a2 2 135 0 0 2-2v-14.5a2 2 45 0 0-2-2h-.625a2 2 45 0 1-2-2v-.625a2 2 45 0 0-2-2h-.625a2 2 45 0 1-2-2V7.5a2 2 45 0 0-2-2h-14.5a2 2 135 0 0-2 2");
}
</style><path class="mvnqavb5w"/>`,
		"fallback": "arcticons:urnetwork",
	});
}

export default Component;
