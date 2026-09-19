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
		"content": `<style>.b4zft8y1p {
  cx: 20.36px;
  cy: 6.99px;
  r: 0.75px;
  fill: currentColor;
}

.f69b9bb5l {
  width: 23.63px;
  height: 39px;
  x: 12.185px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.8px;
  ry: 1.8px;
}

.jveznhfso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.69 6.99h5.66");
}

.tal4spbae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.885 25.333V31m0-5.667L20.67 17l9.618 12.069m0 0L25.84 20.6l1.407-2.13l5.868 8.198v4.299L14.885 31");
}
</style><rect class="f69b9bb5l"/><path class="jveznhfso"/><circle class="b4zft8y1p"/><path class="tal4spbae"/>`,
		"fallback": "arcticons:microsoft-bing-wallpapers",
	});
}

export default Component;
