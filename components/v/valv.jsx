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
		"content": `<style>.b_tliwbzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 6.925l18.5 37l18.5-37H28.167l-4.166 9.489l-4.167-9.49z");
}

.kwn8oravu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.721 10.485A21.5 21.5 0 0 1 45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24a21.5 21.5 0 0 1 4.773-13.507m3.667-3.571a21.5 21.5 0 0 1 26.122 0");
}
</style><path class="kwn8oravu"/><path class="b_tliwbzd"/>`,
		"fallback": "arcticons:valv",
	});
}

export default Component;
