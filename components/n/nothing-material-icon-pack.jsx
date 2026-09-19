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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.o1ton43yn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25 15.781v12.438c0 .2.078.39.219.531l4 4a.75.75 0 0 0 1.281-.531V19.781a.75.75 0 0 0-.219-.531l-4-4a.75.75 0 0 0-1.281.53m-7.604-.707l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m1.793-10l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m1.793-10l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354m-.707 2.5l.354.354l.353-.354");
}
</style><rect class="j3s9ivbxi"/><path class="o1ton43yn"/>`,
		"fallback": "arcticons:nothing-material-icon-pack",
	});
}

export default Component;
