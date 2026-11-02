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
		"content": `<style>.a-uw1xbbx {
  stroke-opacity: 0.4;
  d: path("m4 6l2-2v6m-2 6a2 2 0 1 1 4 0l-4 4h4");
}

.d_xn5l81p {
  d: path("M12 7h8m-8 5h8m-8 5h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a-uw1xbbx"/><path class="d_xn5l81p"/></g>`,
		"fallback": "coolicons:list-ordered-duocolor",
	});
}

export default Component;
