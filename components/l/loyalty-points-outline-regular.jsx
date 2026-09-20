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
		"content": `<style>.go6ln---p {
  d: path("m15.5 12 2 2 -2 2 -2 -2Z");
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.yl27oobxu {
  d: path("m8.5 12 2 2 -2 2 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="yl27oobxu"/><path class="go6ln---p"/></g>`,
		"fallback": "iconmind:loyalty-points-outline-regular",
	});
}

export default Component;
