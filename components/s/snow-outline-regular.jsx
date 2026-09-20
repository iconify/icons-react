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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rhlzwkbmj {
  d: path("M17 16.5v5m-2.5 0 5 -5");
}

.v8tjdu5mh {
  d: path("M7 16.5v5m-2.5 0 5 -5");
}
</style><g class="nrj6p8qat"><path class="c-pcdbceg"/><path class="v8tjdu5mh"/><path class="rhlzwkbmj"/></g>`,
		"fallback": "iconmind:snow-outline-regular",
	});
}

export default Component;
