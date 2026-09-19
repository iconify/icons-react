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
		"content": `<style>.ocfet-9_s {
  d: path("M7.615 19.163L9.9 26.198m0 .001l2.286 7.035m.001 0l2.286 7.035m-.001 0l1.05 3.231m0 0c.615-2.994 2.165-5.898 4.591-8.72M9.533 13.57c3.287 0 5.753.822 6.986 2.877l6.575 13.562c.206.41.616.41.822 0l6.575-13.562c1.233-2.055 3.288-2.877 6.986-2.877");
}

.u5c2jsyyp {
  d: path("m37.477 13.755l-9.862 19.952c-1.816 2.851-6.83 3.065-8.22 0L9.533 13.57");
}

.vc_0djrap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.614 19.164a7.38 7.38 0 0 1 4.75-9.321l16.415-5.334m4.565-.009A7.38 7.38 0 0 1 38.1 9.258l2.285 7.035a7.38 7.38 0 0 1-4.749 9.321l-4.74 1.54");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="vc_0djrap"/><g class="y9tr6bcfx"><path class="ocfet-9_s"/><path class="u5c2jsyyp"/></g>`,
		"fallback": "arcticons:my-viettel",
	});
}

export default Component;
