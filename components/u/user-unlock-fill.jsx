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
		"content": `<style>.mye-lkb7s {
  d: path("M16 16L21 16C21.5523 16 22 16.4477 22 17L22 20C22 20.5523 21.5523 21 21 21L16 21C15.4477 21 15 20.5523 15 20L15 17C15 16.4477 15.4477 16 16 16ZM20.5 16L20.5 12C20.5 10.8954 19.6046 10 18.5 10C17.3954 10 16.5 10.8954 16.5 12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r5tyl8b8b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11 12C11.5523 12 12 12.4477 12 13V21C12 21.5523 11.5523 22 11 22H3C1.89542 22 1 21.1046 1 20V19C1 15.134 4.13402 12 8 12H11ZM9 2C11.2092 2 13 3.7908 13 6C13 8.2092 11.2092 10 9 10C6.7909 10 5 8.2092 5 6C5 3.7908 6.7909 2 9 2Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="r5tyl8b8b"/><path class="mye-lkb7s"/></g>`,
		"fallback": "keyline-icons:user-unlock-fill",
	});
}

export default Component;
