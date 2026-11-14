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
		"content": `<style>.bd31zlbux {
  d: path("M12 10h6m-6 4h4");
}

.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.pe1auwbmd {
  fill: currentColor;
  d: path("M5.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="pe1auwbmd"/><path class="bd31zlbux"/></g>`,
		"fallback": "uix-sharp:notification-banner",
	});
}

export default Component;
