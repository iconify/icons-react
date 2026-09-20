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
		"content": `<style>.wwi6oabsu {
  fill: currentColor;
  d: path("M17.35 14.6L9.4 6.65l2-2q.8-.8 1.825-1.225T15.375 3q2.35 0 3.988 1.638T21 8.625q0 1.125-.425 2.15T19.35 12.6zm2.45 8.1l-5.275-5.275L12.6 19.35q-.8.8-1.825 1.225T8.625 21q-2.35 0-3.988-1.637T3 15.375q0-1.125.425-2.15T4.65 11.4l1.925-1.925L1.4 4.3l1.4-1.4l18.4 18.4z");
}
</style><path class="wwi6oabsu"/>`,
		"fallback": "material-symbols:pill-off",
	});
}

export default Component;
