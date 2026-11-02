import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b49rn0bzv {
  fill: currentColor;
  d: path("m15 6.804l2.428-1.402a2 2 0 0 1 2.732.732l1 1.732a2.003 2.003 0 0 1-.732 2.732L18 12l2.428 1.402a1.996 1.996 0 0 1 .732 2.732l-1 1.732a2 2 0 0 1-2.732.732L15 17.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.804l-2.428 1.402a2 2 0 0 1-2.732-.732l-1-1.732a2.003 2.003 0 0 1 .732-2.732L6 12l-2.428-1.402a1.996 1.996 0 0 1-.732-2.732l1-1.732a2 2 0 0 1 2.732-.732L9 6.804V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z");
}
</style><path class="b49rn0bzv"/>`,
		"fallback": "coolicons:medical-cross-fill-round",
	});
}

export default Component;
