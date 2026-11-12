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
		"content": `<style>.f8g-6ycep {
  d: path("M22 5.0329L22 18.9671C22 21.2763 19.8658 22.736 18.1292 21.6145L7.34015 14.6474C5.55328 13.4935 5.55328 10.5065 7.34016 9.35258L18.1292 2.38548C19.8658 1.26402 22 2.72368 22 5.0329Z");
}

.fobn6xbgo {
  d: path("M2 5V19");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="f8g-6ycep"/><path class="fobn6xbgo"/></g>`,
		"fallback": "solar:skip-previous-line-duotone",
	});
}

export default Component;
