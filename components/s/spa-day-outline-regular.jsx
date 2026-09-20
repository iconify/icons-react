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
		"content": `<style>.jkuojibnm {
  d: path("M3 20h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wjf8a3b6o {
  d: path("M6 5a2 2 0 0 0 0 4h12a2 2 0 0 0 0 -4Z");
}

.wtwihobdq {
  d: path("M4 12a2.5 2.5 0 0 0 0 5h16a2.5 2.5 0 0 0 0 -5Z");
}
</style><g class="nrj6p8qat"><path class="wjf8a3b6o"/><path class="wtwihobdq"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:spa-day-outline-regular",
	});
}

export default Component;
