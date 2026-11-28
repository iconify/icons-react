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
		"content": `<style>.iw9y7fb4h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 4L13 4C14.1046 4 15 4.8954 15 6L15 8C15 9.1046 14.1046 10 13 10L11 10C9.8954 10 9 9.1046 9 8L9 6C9 4.8954 9.8954 4 11 4Z");
  stroke: none;
}

.k2yiocfvw {
  d: path("M11 5L13 5C13.5523 5 14 5.4477 14 6L14 8C14 8.5523 13.5523 9 13 9L11 9C10.4477 9 10 8.5523 10 8L10 6C10 5.4477 10.4477 5 11 5ZM10 8L2 19M14 8L22 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iw9y7fb4h"/><path class="k2yiocfvw"/></g>`,
		"fallback": "keyline-icons:vector-corner-two-tone",
	});
}

export default Component;
