import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.im_tqy6bf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9 36.43a19.34 19.34 0 0 1 0-24.86m30 0a19.37 19.37 0 0 1 0 24.86m-24.74-4.32a12.57 12.57 0 0 1 0-16.14m19.56 0a12.57 12.57 0 0 1 0 16.14M24 17.84a6.16 6.16 0 0 1 2.3 11.87l-2.3 5l-2.3-5A6.16 6.16 0 0 1 24 17.84m0 3.69A2.47 2.47 0 1 0 26.47 24A2.44 2.44 0 0 0 24 21.53");
}
</style><path class="im_tqy6bf"/>`,
		"fallback": "arcticons:towercollector",
	});
}

export default Component;
