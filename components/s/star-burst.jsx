import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vhjb3lb2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.683 3.942za1.196 1.196 0 0 0 1.77.352a.787.787 0 0 1 1.261.523a1.196 1.196 0 0 0 1.501 1.002a.787.787 0 0 1 .966.966a1.196 1.196 0 0 0 1.002 1.501a.787.787 0 0 1 .523 1.261a1.196 1.196 0 0 0 .352 1.77a.787.787 0 0 1 0 1.366a1.196 1.196 0 0 0-.352 1.77a.787.787 0 0 1-.523 1.261a1.196 1.196 0 0 0-1.002 1.501a.787.787 0 0 1-.966.966a1.196 1.196 0 0 0-1.501 1.002a.787.787 0 0 1-1.261.523a1.196 1.196 0 0 0-1.77.352a.787.787 0 0 1-1.366 0a1.196 1.196 0 0 0-1.77-.352a.787.787 0 0 1-1.261-.523a1.196 1.196 0 0 0-1.501-1.002a.787.787 0 0 1-.966-.966a1.196 1.196 0 0 0-1.002-1.501a.787.787 0 0 1-.523-1.261a1.196 1.196 0 0 0-.352-1.77a.787.787 0 0 1 0-1.366a1.196 1.196 0 0 0 .352-1.77a.787.787 0 0 1 .523-1.261a1.196 1.196 0 0 0 1.002-1.501a.787.787 0 0 1 .966-.966a1.196 1.196 0 0 0 1.501-1.002a.787.787 0 0 1 1.261-.523a1.196 1.196 0 0 0 1.77-.352a.787.787 0 0 1 1.366 0");
}
</style><path class="vhjb3lb2a"/>`,
		"fallback": "uix:star-burst",
	});
}

export default Component;
