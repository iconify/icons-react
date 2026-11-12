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
		"content": `<style>.a31fjybis {
  d: path("m17 13l-4 4a1.414 1.414 0 0 1-2 0l-7-7c-.517-.517.448-1.965 2-3l6-4l6 4c1.552 1.035 2.517 2.483 2 3zm-5-9v13M4 9h16");
}

.mvv8hjb0d {
  stroke-opacity: 0.4;
  d: path("M12 18c0 3 5 3 7 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mvv8hjb0d"/><path class="a31fjybis"/></g>`,
		"fallback": "coolicons:kite-duocolor-round",
	});
}

export default Component;
