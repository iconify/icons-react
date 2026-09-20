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
		"content": `<style>.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rtc4d5stj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 14h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wo--el8ej {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wog2376vd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 10h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wo--el8ej"/><path class="wog2376vd"/><path class="rtc4d5stj"/><path class="ky4omnbla"/><path class="l0zc9ibud"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:reconcile-duotone-regular",
	});
}

export default Component;
