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
		"content": `<style>.a_-fv_iii {
  stroke-opacity: 0.4;
  d: path("M8 8L6 6m6-3v4m4 1l2-2M3 11h4m10 0h4M3 16h4m10 0h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uuyf95byn {
  d: path("M3 19v-7a9 9 0 0 1 18 0v9h-4v-9a5 5 0 0 0-10 0v9H3z");
}
</style><g class="nrj6p8qat"><path class="a_-fv_iii"/><path class="uuyf95byn"/></g>`,
		"fallback": "coolicons:tunnel-duocolor-sharp",
	});
}

export default Component;
