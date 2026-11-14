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
		"content": `<style>.e3mnw5bei {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.75 3.25h.5q1.036 0 1.768.732t.732 1.768v13q0 1.036-.732 1.768t-1.768.732h-.5q-2.5 0-2.5-2.5v-13q0-2.5 2.5-2.5m-6.5 5.5h-.5q-2.5 0-2.5 2.5v7.5q0 2.5 2.5 2.5h.5q2.5 0 2.5-2.5v-7.5q0-2.5-2.5-2.5m-7.5 4.5h.5q2.5 0 2.5 2.5v3q0 2.5-2.5 2.5h-.5q-2.5 0-2.5-2.5v-3q0-2.5 2.5-2.5");
}
</style><path class="e3mnw5bei"/>`,
		"fallback": "uix-solid:risk-level-medium",
	});
}

export default Component;
