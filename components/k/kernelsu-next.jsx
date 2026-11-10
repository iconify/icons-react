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

.ra453ackx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5c-5.937 0-10.75-4.813-10.75-10.75S18.063 24 24 24s10.75-4.813 10.75-10.75S29.937 2.5 24 2.5");
}

.rycrdzd2c {
  cx: 24px;
  cy: 13.25px;
  r: 2.813px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wfyb7rb9k {
  cx: 24px;
  cy: 34.75px;
  r: 2.813px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="rycrdzd2c"/><path class="ra453ackx"/><circle class="wfyb7rb9k"/>`,
		"fallback": "arcticons:kernelsu-next",
	});
}

export default Component;
