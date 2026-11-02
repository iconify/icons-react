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
		"content": `<style>.h4f8xqbrj {
  d: path("M5 3h14v18H5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rithh5b-z {
  stroke-opacity: 0.4;
  d: path("M12 7h.01M9 14a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><g class="nrj6p8qat"><path class="rithh5b-z"/><path class="h4f8xqbrj"/></g>`,
		"fallback": "coolicons:speaker-duocolor-sharp",
	});
}

export default Component;
