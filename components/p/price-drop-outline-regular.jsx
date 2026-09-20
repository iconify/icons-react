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
		"content": `<style>.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}

.ughce8kjw {
  d: path("M12 8.5v6");
}

.y_2nr8hoa {
  d: path("m9.5 12 2.5 2.5 2.5 -2.5");
}
</style><g class="nrj6p8qat"><path class="pywr_yykw"/><path class="m0hvambgh"/><path class="ughce8kjw"/><path class="y_2nr8hoa"/></g>`,
		"fallback": "iconmind:price-drop-outline-regular",
	});
}

export default Component;
