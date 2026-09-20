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
		"content": `<style>.b4gzso3dl {
  d: path("M12 13.5v3");
}

.dvq2jmb3i {
  d: path("m8.5 17 7 -7");
}

.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hlxwfib3h {
  d: path("m9 10.5 3 3 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="hlxwfib3h"/><path class="b4gzso3dl"/><path class="dvq2jmb3i"/></g>`,
		"fallback": "iconmind:scope-deny-outline-regular",
	});
}

export default Component;
