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
		"content": `<style>.hyj1n9b5s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.25 3.25h-.5q-2.5 0-2.5 2.5v13.5q0 1.036.732 1.768t1.768.732h.5q1.036 0 1.768-.732t.732-1.768V5.75q0-2.5-2.5-2.5m6.5 4h.5q1.036 0 1.768.732t.732 1.768v9.5q0 1.036-.732 1.768t-1.768.732h-.5q-1.036 0-1.768-.732t-.732-1.768v-9.5q0-2.5 2.5-2.5m-14 4h.5q2.5 0 2.5 2.5v5.5q0 1.036-.732 1.768t-1.768.732h-.5q-1.036 0-1.768-.732T2.25 19.25v-5.5q0-2.5 2.5-2.5");
}
</style><path class="hyj1n9b5s"/>`,
		"fallback": "uix-solid:test-report",
	});
}

export default Component;
