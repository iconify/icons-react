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
		"content": `<style>.ioli74dmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.73 23.996a3.927 3.927 0 0 1-3.926 3.927h-.002a3.926 3.926 0 0 1 0-7.854a3.926 3.926 0 0 1 3.927 3.927m3.356-6.379a9.67 9.67 0 0 1 2.398 6.379a9.67 9.67 0 0 1-2.403 6.385m4.364-17.077a15.805 15.805 0 0 1-.004 21.388m4.278-25.61a21.8 21.8 0 0 1 5.896 14.914a21.8 21.8 0 0 1-5.905 14.921");
}

.ouij8hbjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.346 4.5a28.32 28.32 0 0 1 7.778 19.496A28.32 28.32 0 0 1 32.337 43.5");
}
</style><path class="ioli74dmx"/><path class="ouij8hbjj"/>`,
		"fallback": "arcticons:radarbot",
	});
}

export default Component;
