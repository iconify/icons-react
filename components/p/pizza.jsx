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
		"content": `<style>.jb5iswssr {
  cx: 23.174px;
  cy: 20.901px;
  r: 3.429px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ktmonkbrc {
  cx: 15.47px;
  cy: 33.234px;
  r: 1.952px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ons618bvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.146 10.604a37.2 37.2 0 0 1 11.47 10.192a38 38 0 0 1 6.373 13.623");
}

.tf9soyb0i {
  cx: 27.197px;
  cy: 31.706px;
  r: 1.97px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u7g6umbir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 40.705l17.356-33.41A37.65 37.65 0 0 1 42.5 33.746z");
}
</style><path class="u7g6umbir"/><circle class="tf9soyb0i"/><circle class="jb5iswssr"/><circle class="ktmonkbrc"/><path class="ons618bvv"/>`,
		"fallback": "arcticons:pizza",
	});
}

export default Component;
