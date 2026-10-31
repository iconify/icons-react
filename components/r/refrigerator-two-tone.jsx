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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uezbo3btw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 1L16 1C18.2092 1 20 2.7908 20 5L20 19C20 21.2092 18.2092 23 16 23L8 23C5.7908 23 4 21.2092 4 19L4 5C4 2.7908 5.7908 1 8 1Z");
  stroke: none;
}

.yaoql8bhx {
  d: path("M8 2L16 2C17.6569 2 19 3.3431 19 5L19 19C19 20.6569 17.6569 22 16 22L8 22C6.3431 22 5 20.6569 5 19L5 5C5 3.3431 6.3431 2 8 2ZM5 11L19 11M9 6L9 7M9 15L9 18");
}
</style><g class="nrj6p8qat"><path class="uezbo3btw"/><path class="yaoql8bhx"/></g>`,
		"fallback": "keyline-icons:refrigerator-two-tone",
	});
}

export default Component;
