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
		"content": `<style>.ec58tkbjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.92 4.5v9.3h9.61");
}

.ibek2co3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.78 43.5l-5.25-4.56l5.25-4.64m3.58-12.07l5.25 4.56l-5.25 4.64m5.25-4.64H9.47");
}

.o2srxbcsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.53 39h24a2 2 0 0 0 2-2V13.8l-9.28-9.28H14.58a2.05 2.05 0 0 0-2.05 2.05v12.55");
}
</style><path class="ibek2co3k"/><path class="o2srxbcsm"/><path class="ec58tkbjm"/>`,
		"fallback": "arcticons:remotefiles",
	});
}

export default Component;
