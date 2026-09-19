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
		"content": `<style>.cnd4pq4bd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.404 42.304a18 18 0 0 1 24.9-24.9");
}

.f0cq-3bre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.18 39.348V22.9l-9.674 12.108h10.798M20.942 27.23c1.934 0 4.506-3.299 4.506-4.331v16.523");
}

.j3s9ivbxi {
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
</style><path class="f0cq-3bre"/><rect class="j3s9ivbxi"/><path class="cnd4pq4bd"/>`,
		"fallback": "arcticons:oxygenos-14-round-icon-pack",
	});
}

export default Component;
