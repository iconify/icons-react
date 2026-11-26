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

.u7j23si5d {
  d: path("M5 4.1716C3.8014 4.5954 3 5.7287 3 7L3 19C3 20.6569 4.3431 22 6 22L18 22C19.6569 22 21 20.6569 21 19L21 7C21 5.7287 20.1986 4.5954 19 4.1716M3 13L21 13M12 8V2M9 5L12 2L15 5");
}

.u9i5jc3mv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 13L3 19C3 20.6569 4.3431 22 6 22L18 22C19.6569 22 21 20.6569 21 19L21 13Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="u9i5jc3mv"/><path class="u7j23si5d"/></g>`,
		"fallback": "keyline-icons:table-rows-move-up-fill",
	});
}

export default Component;
