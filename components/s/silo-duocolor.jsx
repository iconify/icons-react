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
		"content": `<style>.d2oejxbzw {
  d: path("M4 21V8a4 4 0 1 1 8 0v13m-9 0h18M12 8l6 3c1.226.613 2 1.387 2 2v8");
}

.nbbsvrbsx {
  stroke-opacity: 0.4;
  d: path("M4 13h8m-8 4h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nbbsvrbsx"/><path class="d2oejxbzw"/></g>`,
		"fallback": "coolicons:silo-duocolor",
	});
}

export default Component;
