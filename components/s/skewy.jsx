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
		"content": `<style>.k7tfx8bqk {
  d: path("M6.54 30.439a17.1 17.1 0 0 1-.814-5.21c0-9.746 8.179-17.648 18.269-17.648s18.268 7.902 18.268 17.649c0 1.761-.273 3.513-.81 5.197");
}

.pth7gz5zl {
  width: 7.575px;
  height: 11.435px;
  x: 27.027px;
  y: 28.82px;
  rx: 3.788px;
  ry: 3.788px;
}

.uuau9ybtk {
  d: path("M14.832 40.254V28.82l7.575 11.434V28.82M9.42 40.37c-2.368-1.022-3.92-3.486-3.92-6.226s1.552-5.205 3.92-6.226m29.04-.05c2.431.987 4.04 3.486 4.04 6.276s-1.609 5.289-4.04 6.275");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="pth7gz5zl"/><path class="uuau9ybtk"/><path class="k7tfx8bqk"/></g>`,
		"fallback": "arcticons:skewy",
	});
}

export default Component;
