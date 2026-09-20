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
		"content": `<style>.djqc4ackk {
  d: path("M5 9v9h14V9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.xx6l64bvs {
  fill: currentColor;
  d: path("M5 9v9h14V9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yaum7gn-a {
  d: path("M7 9a5 5 0 0 1 10 0");
}
</style><g class="nrj6p8qat"><path class="xx6l64bvs"/><path class="djqc4ackk"/><path class="yaum7gn-a"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:picnic-duotone-regular",
	});
}

export default Component;
