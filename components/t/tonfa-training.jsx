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
		"content": `<style>.zt9zswboj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.713 4.752L4.752 15.713q-.733.732-.733 1.767q0 1.036.733 1.768q.732.733 1.767.733q1.036 0 1.768-.733l.231-.23q.185.291.477.583l1.768 1.768q1.59 1.591 3.181 0t0-3.181l-1.768-1.768q-.292-.292-.583-.477l7.655-7.656q.733-.732.733-1.768q0-1.035-.733-1.767q-.732-.733-1.768-.733q-1.035 0-1.767.733");
}
</style><path class="zt9zswboj"/>`,
		"fallback": "uix-solid:tonfa-training",
	});
}

export default Component;
