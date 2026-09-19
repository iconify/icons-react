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
		"content": `<style>.chza5_bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.037 37.964L5.5 42.5m37-37l-4.311 4.311");
}

.joi22b4wa {
  cx: 30.017px;
  cy: 24.161px;
  r: 3.732px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y3ond4ags {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.253 24.16c0-7.924-6.424-14.349-14.35-14.349s-14.35 6.425-14.35 14.35c0 9.78 14.35 17.631 14.35 17.631s14.35-7.85 14.35-17.631");
}
</style><path class="y3ond4ags"/><circle class="joi22b4wa"/><path class="chza5_bcj"/>`,
		"fallback": "arcticons:taxi-de",
	});
}

export default Component;
