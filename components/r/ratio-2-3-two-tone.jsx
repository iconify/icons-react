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
		"content": `<style>.bk04t2vmh {
  d: path("M5 5C5 3.3431 6.3431 2 8 2L16 2C17.6569 2 19 3.3431 19 5L19 19C19 20.6569 17.6569 22 16 22L8 22C6.3431 22 5 20.6569 5 19L5 5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4zeb2lsa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 5C4 2.7909 5.7909 1 8 1L16 1C18.2091 1 20 2.7909 20 5L20 19C20 21.2091 18.2091 23 16 23L8 23C5.7909 23 4 21.2091 4 19L4 5Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="t4zeb2lsa"/><path class="bk04t2vmh"/></g>`,
		"fallback": "keyline-icons:ratio-2-3-two-tone",
	});
}

export default Component;
