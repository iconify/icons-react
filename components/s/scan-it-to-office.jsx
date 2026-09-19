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

.i6tvxkblg {
  cx: 14px;
  cy: 17px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ogkperiwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.823 31.68l9.52-7.9l1.23 10.231c-3.916.705-8.954-.915-10.75-2.331");
}

.ol9sl3d6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.726 20.891c6.765 14.34 22.075 21.227 34.213 20.28m-24.79-35.11c10.816-.173 26.295 4.529 33.111 21.142");
}

.uqzlk6bvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.98 33.776c-2.117 3.794-7.275 9.642-13.586 10.98m-4.907-2.002c1.316-10.397 10.654-28.491 28.531-30.484");
}

.yq-8ktbqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.074 12.45c.65-2.457 7.577-9.407 11.9-9.58");
}
</style><circle class="cpk0fnbgt"/><circle class="i6tvxkblg"/><path class="ogkperiwi"/><path class="uqzlk6bvp"/><path class="ol9sl3d6j"/><path class="yq-8ktbqp"/>`,
		"fallback": "arcticons:scan-it-to-office",
	});
}

export default Component;
