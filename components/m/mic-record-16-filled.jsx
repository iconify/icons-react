import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vc8_chbbr {
  fill: currentColor;
  d: path("M10.5 6a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 1a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m0 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-8-.5A.5.5 0 0 1 3 8a3.5 3.5 0 0 0 2.042 3.183q.076.603.274 1.16A4.5 4.5 0 0 1 2 8a.5.5 0 0 1 .5-.5m4-5.5A2.5 2.5 0 0 1 9 4.5v.707a5.5 5.5 0 0 0-3.979 4.809A2.5 2.5 0 0 1 4 8V4.5A2.5 2.5 0 0 1 6.5 2");
}
</style><path class="vc8_chbbr"/>`,
		"fallback": "fluent:mic-record-16-filled",
	});
}

export default Component;
