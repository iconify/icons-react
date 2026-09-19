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
		"content": `<style>.frx6kubpi {
  cx: 23.182px;
  cy: 24.819px;
  r: 17.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xnipclqhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.045 16.59a21.5 21.5 0 0 1 0 16.455M7.98 9.616a21.5 21.5 0 0 1 15.202-6.297m-8.228 41.363A21.5 21.5 0 0 1 3.318 33.045");
}
</style><path class="xnipclqhj"/><circle class="frx6kubpi"/>`,
		"fallback": "arcticons:rapidshot",
	});
}

export default Component;
