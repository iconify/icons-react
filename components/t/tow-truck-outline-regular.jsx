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
		"content": `<style>.acx0wnihd {
  d: path("M21.5 6.5a2.5 2.5 0 0 1 -5 0");
}

.d2pq28uem {
  d: path("M2 17V8a2 2 0 0 1 2 -2h5v11Z");
}

.f8ull7b3a {
  d: path("M9 13h13v4H9");
}

.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.th2thdcjq {
  d: path("M9 10h4l6 -6");
}
</style><g class="nrj6p8qat"><path class="d2pq28uem"/><path class="th2thdcjq"/><path class="acx0wnihd"/><path class="f8ull7b3a"/><path class="fg8libqda"/><path class="pw61xnbei"/></g>`,
		"fallback": "iconmind:tow-truck-outline-regular",
	});
}

export default Component;
