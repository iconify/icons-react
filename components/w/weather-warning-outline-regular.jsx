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
		"content": `<style>.gwnaabclj {
  d: path("M12 9v5");
}

.ivqg9reic {
  d: path("M11 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}
</style><g class="nrj6p8qat"><path class="uweslxo3x"/><path class="gwnaabclj"/><path class="ivqg9reic"/></g>`,
		"fallback": "iconmind:weather-warning-outline-regular",
	});
}

export default Component;
