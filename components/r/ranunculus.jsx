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
		"content": `<style>.g2kx7ng5b {
  fill: currentColor;
  d: path("M12 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdy-zlbol {
  d: path("M15.5 14a2.25 2.25 0 0 1-3.5 2a2.25 2.25 0 0 1-3.5-2a2.25 2.25 0 0 1 0-4A2.25 2.25 0 0 1 12 8a2.25 2.25 0 0 1 3.5 2a2.25 2.25 0 0 1 0 4Z");
}

.yjjc8cctt {
  d: path("M19.75 12a3.25 3.25 0 0 1-2.25 5.5a3.25 3.25 0 0 1-5.5 2.25a3.25 3.25 0 0 1-5.5-2.25A3.25 3.25 0 0 1 4.25 12A3.25 3.25 0 0 1 6.5 6.5A3.25 3.25 0 0 1 12 4.25a3.25 3.25 0 0 1 5.5 2.25a3.25 3.25 0 0 1 2.25 5.5Z");
}
</style><g class="ulnmmdpxh"><path class="yjjc8cctt"/><path class="wdy-zlbol"/><path class="g2kx7ng5b"/></g>`,
		"fallback": "uix-sharp:ranunculus",
	});
}

export default Component;
