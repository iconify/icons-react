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
		"content": `<style>.cr10akffk {
  stroke-opacity: 0.4;
  d: path("M3 4h6v6H3Zm0 13l2 2l4-4");
}

.favqejboq {
  d: path("M13 7h8m-8 10h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cr10akffk"/><path class="favqejboq"/></g>`,
		"fallback": "coolicons:list-todo-duocolor-sharp",
	});
}

export default Component;
