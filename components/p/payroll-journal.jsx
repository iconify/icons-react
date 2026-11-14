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
		"content": `<style>.n6_otzump {
  d: path("M21 12.567V3.5q-6-.75-9 1.5q-3-2.25-9-1.5V16q5.348-.669 8.313 1.046M12 5v10.1M5.75 8.5h3.5m5.5 0h3.5M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n6_otzump"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:payroll-journal",
	});
}

export default Component;
