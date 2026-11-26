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

.td2orpdal {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17.6569 17.6569C16.2102 19.1035 14.2089 20 12 20C7.5817 20 4 16.4183 4 12C4 7.5817 7.5817 4 12 4C16.4183 4 20 7.5817 20 12C20 14.2089 19.1035 16.2102 17.6569 17.6569Z");
  stroke: none;
}

.wvkkleq1f {
  d: path("M19 12C19 15.866 15.866 19 12 19C8.134 19 5 15.866 5 12C5 8.134 8.134 5 12 5C15.866 5 19 8.134 19 12ZM12 2L12 22M21 6.8038L3 17.1962M21 17.1962L3 6.8038");
}
</style><g class="nrj6p8qat"><path class="td2orpdal"/><path class="wvkkleq1f"/></g>`,
		"fallback": "keyline-icons:ship-wheel-two-tone",
	});
}

export default Component;
