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
		"content": `<style>.unoq3yb7n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.25q-2 0-2 2t2 2q.828 0 1.414-.586T8.5 4.25t-.586-1.414T6.5 2.25m3.5 2q0-2 2-2t2 2t-2 2t-2-2m7.5-2q-2 0-2 2t2 2t2-2t-2-2M4.5 9.5q0-2 2-2q.828 0 1.414.586T8.5 9.5t-.586 1.414T6.5 11.5q-2 0-2-2m7.5-2q-2 0-2 2t2 2t2-2t-2-2m3.5 2q0-2 2-2t2 2t-2 2t-2-2m-9 3.25q-2 0-2 2t2 2q.828 0 1.414-.586T8.5 14.75t-.586-1.414T6.5 12.75m3.5 2q0-2 2-2t2 2t-2 2t-2-2m7.5-2q-2 0-2 2t2 2t2-2t-2-2M10 20q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="unoq3yb7n"/>`,
		"fallback": "uix-solid:phone-dial-pad",
	});
}

export default Component;
