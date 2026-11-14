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
		"content": `<style>.uvd2f-60s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 4.25h11.5q2.5 0 2.5 2.5t-2.5 2.5H4.25q-2.5 0-2.5-2.5q0-1.036.732-1.768T4.25 4.25m11.5.5h-.5q-2 0-2 2t2 2h.5q2 0 2-2t-2-2M4 12.25h2q2.25 0 2.25 2.25v2q0 2.25-2.25 2.25H4q-2.25 0-2.25-2.25v-2q0-2.25 2.25-2.25m9 0h-2q-2.25 0-2.25 2.25v2q0 2.25 2.25 2.25h2q2.25 0 2.25-2.25v-2q0-2.25-2.25-2.25m5 0h2q2.25 0 2.25 2.25v2q0 2.25-2.25 2.25h-2q-2.25 0-2.25-2.25v-2q0-2.25 2.25-2.25");
}
</style><path class="uvd2f-60s"/>`,
		"fallback": "uix-solid:test-strip",
	});
}

export default Component;
