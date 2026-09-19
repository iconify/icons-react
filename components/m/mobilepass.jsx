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
		"content": `<style>.j3-se-9mb {
  cx: 24.989px;
  cy: 23.54px;
  r: 1.904px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m4mh00-gx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c13.355-4.243 16.635-14.368 16.635-19.286V11.309a1.13 1.13 0 0 0-.739-1.062L24.788 4.641a2.27 2.27 0 0 0-1.576 0L8.104 10.246a1.13 1.13 0 0 0-.74 1.063v12.905c0 4.918 3.281 15.043 16.636 19.286");
}

.o2izptbod {
  cx: 18.773px;
  cy: 23.54px;
  r: 1.904px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rpfyx897q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.302 22.419l2.513 2.513l5.533-5.532");
}

.u2cue8boe {
  cx: 12.556px;
  cy: 23.54px;
  r: 1.904px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="m4mh00-gx"/><circle class="j3-se-9mb"/><circle class="o2izptbod"/><circle class="u2cue8boe"/><path class="rpfyx897q"/>`,
		"fallback": "arcticons:mobilepass",
	});
}

export default Component;
