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
		"content": `<style>.b7tfhkbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.612 5.5c6.565 0 11.888 5.323 11.888 11.888c0 6.576-5.323 11.9-11.888 11.9c-6.576 0-11.9-5.324-11.9-11.9c0-6.565 5.324-11.888 11.9-11.888");
}

.z7l46xbyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.118 20.92q.334 1.755.382 4.405V42.5H25.325C13.425 42.5 5.5 34.575 5.5 22.675V5.5h17.175q2.555 0 4.595.418");
}
</style><path class="b7tfhkbay"/><path class="z7l46xbyj"/>`,
		"fallback": "arcticons:japes-lux-icon",
	});
}

export default Component;
