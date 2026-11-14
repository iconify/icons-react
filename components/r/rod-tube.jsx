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
		"content": `<style>.p5t-w6hku {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.828 3.869l1.06-1.061q.733-.733 1.769-.733q1.035 0 1.767.733l1.768 1.768q.733.732.733 1.767q0 1.036-.733 1.768l-1.061 1.061q-1.214 1.213-2.428.759q-.124 1.087-.93 1.892l-8.486 8.485q-2.298 2.297-4.595 0t0-4.595l8.485-8.486q.805-.806 1.892-.93q-.454-1.214.759-2.428");
}
</style><path class="p5t-w6hku"/>`,
		"fallback": "uix-solid:rod-tube",
	});
}

export default Component;
