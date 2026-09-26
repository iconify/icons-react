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
		"content": `<style>.jsoz6_bak {
  fill: currentColor;
  d: path("M5 3H19C21.20914 3 23 4.79086 23 7V13C23 15.20914 21.20914 17 19 17H5C2.79086 17 1 15.20914 1 13V7C1 4.79086 2.79086 3 5 3Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3qxykbdg {
  d: path("M12 16V20M8 20H16");
}
</style><g class="nrj6p8qat"><path class="jsoz6_bak"/><path class="o3qxykbdg"/></g>`,
		"fallback": "keyline-icons:monitor-fill",
	});
}

export default Component;
