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
		"content": `<style>.b2s6wemss {
  cx: 24px;
  cy: 20.832px;
  r: 5.816px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bo1ha4bli {
  cx: 30.842px;
  cy: 27.168px;
  r: 5.816px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l13rasbzw {
  cx: 10.316px;
  cy: 20.832px;
  r: 5.816px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q38a0zbfy {
  cx: 37.684px;
  cy: 20.832px;
  r: 5.816px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.swc4tonsc {
  cx: 17.158px;
  cy: 27.168px;
  r: 5.816px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="l13rasbzw"/><circle class="b2s6wemss"/><circle class="q38a0zbfy"/><circle class="swc4tonsc"/><circle class="bo1ha4bli"/>`,
		"fallback": "arcticons:olympics",
	});
}

export default Component;
