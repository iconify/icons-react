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

.dr57fdc0a {
  cx: 32.959px;
  cy: 10.829px;
  r: 0.75px;
  fill: currentColor;
}

.g9pn9xbos {
  cx: 15.041px;
  cy: 10.829px;
  r: 0.75px;
  fill: currentColor;
}

.q-ay7ac-d {
  cx: 15.041px;
  cy: 37.171px;
  r: 0.75px;
  fill: currentColor;
}

.qfhjmybex {
  cx: 32.959px;
  cy: 37.171px;
  r: 0.75px;
  fill: currentColor;
}

.tg8vlotfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.843 16.419l10.314 15.162m0-15.162L18.843 31.581");
}
</style><circle class="cpk0fnbgt"/><path class="tg8vlotfd"/><circle class="q-ay7ac-d"/><circle class="qfhjmybex"/><circle class="dr57fdc0a"/><circle class="g9pn9xbos"/>`,
		"fallback": "arcticons:luxerone",
	});
}

export default Component;
