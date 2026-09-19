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
		"content": `<style>.g9z1im7gb {
  cx: 18.946px;
  cy: 35.65px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9.666px;
  ry: 7.696px;
}

.rbj-aybjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.491 34.813V4.5C30.197 14.72 38.6 13.098 38.6 21.745c0 2.286-1.192 4.47-2.945 6.445");
}
</style><ellipse transform="rotate(-15.242 18.946 35.65)" class="g9z1im7gb"/><path class="rbj-aybjm"/>`,
		"fallback": "arcticons:nintendo-music",
	});
}

export default Component;
