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
		"content": `<style>.myadcub7g {
  d: path("M11 4H4v16h16v-7");
}

.ngtiubbgl {
  stroke-opacity: 0.4;
  d: path("M9 15v-3l9-9l3 3l-9 9Zm6-9l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ngtiubbgl"/><path class="myadcub7g"/></g>`,
		"fallback": "coolicons:note-edit-duocolor-sharp",
	});
}

export default Component;
