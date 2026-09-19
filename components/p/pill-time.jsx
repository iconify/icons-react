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

.cvazfwbnz {
  d: path("M21.272 22.782a2.79 2.79 0 0 0 3.946 3.946l5.92-5.92l-3.947-3.945z");
}

.rqthuvx5t {
  d: path("m27.191 16.863l3.946 3.946l5.919-5.92a2.79 2.79 0 0 0-3.946-3.945z");
}

.uf6u5hg-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5V12");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="uf6u5hg-j"/><g class="y9tr6bcfx"><path class="rqthuvx5t"/><path class="cvazfwbnz"/></g>`,
		"fallback": "arcticons:pill-time",
	});
}

export default Component;
