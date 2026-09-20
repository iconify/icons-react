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
		"content": `<style>.hzpqnlmob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4");
}

.mpjea5wpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.824 18.42l1.992 2.214L19.7 15.87m4.77 2.376l9.734.013h-2.247M12.19 31.35l2.11 2.346l5.173-5.047m4.997 2.039l9.728.013");
}
</style><path class="mpjea5wpc"/><path class="hzpqnlmob"/>`,
		"fallback": "arcticons:snaptick",
	});
}

export default Component;
