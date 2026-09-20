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
		"content": `<style>.u-9y8f2ie {
  fill: currentColor;
  d: path("M12 15.135q-2.154 0-3.673-1.517t-1.52-3.687q0-1.35.6-2.533t1.461-2.186t1.814-1.81T12.346 2q.385 1.156.974 1.939q.59.782 1.476 1.536q1.302 1.092 1.85 2.147q.546 1.055.546 2.29q0 2.19-1.519 3.706T12 15.135M5 20l.827-2.308h12.346L19 20z");
}
</style><path class="u-9y8f2ie"/>`,
		"fallback": "material-symbols-light:stylus-brush-sharp",
	});
}

export default Component;
