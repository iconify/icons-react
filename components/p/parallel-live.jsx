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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d6fa2fdgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.024 33.292a9.5 9.5 0 0 1-1.887-.613m-1.721-.994a9.5 9.5 0 0 1-1.474-1.327m-1.17-1.61a9.5 9.5 0 0 1-.806-1.81m-.414-1.946a9.5 9.5 0 0 1 0-1.984m.414-1.945c.205-.63.475-1.237.806-1.811m1.17-1.61a9.5 9.5 0 0 1 1.474-1.327m1.721-.994a9.5 9.5 0 0 1 1.887-.613");
}

.locb_4bri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.207 24.707L5.5 24l.707-.707M24 5.5L42.5 24L24 42.5v-28a9.5 9.5 0 0 1 0 19m0-28l-2.737 2.737m-1.37 1.37l-1.368 1.368m-1.368 1.369l-1.37 1.368m-1.368 1.369L13.05 16.45m-1.368 1.368l-1.369 1.369m-1.369 1.369l-1.368 1.368m15.055 19.207l-1.369-1.369m-1.368-1.368l-1.37-1.37m-1.368-1.368l-1.369-1.369M14.42 32.92l-1.37-1.37m-1.369-1.369l-1.368-1.368m-1.369-1.369l-1.369-1.369");
}
</style><path class="d6fa2fdgh"/><circle class="cpk0fnbgt"/><path class="locb_4bri"/>`,
		"fallback": "arcticons:parallel-live",
	});
}

export default Component;
