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
		"content": `<style>.exdvktbsa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.25 2.75q1.036 0 1.768.732t.732 1.768v13.5q0 2.5-2.5 2.5t-2.5-2.5V5.25q0-2.5 2.5-2.5m-4 8.25q0-2.5-2.5-2.5T9.25 11v7.75q0 2.5 2.5 2.5t2.5-2.5zm-9 2.25q2.5 0 2.5 2.5v3q0 2.5-2.5 2.5t-2.5-2.5v-3q0-1.036.732-1.768t1.768-.732");
}
</style><path class="exdvktbsa"/>`,
		"fallback": "uix-solid:signal-3g",
	});
}

export default Component;
