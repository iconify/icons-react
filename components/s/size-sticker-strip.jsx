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
		"content": `<style>.udg3cbi9q {
  d: path("M9 7.5V15h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5acz0biv {
  d: path("M6 7.5H3.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H6m12-9h2.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H18M7.5 4h9A1.5 1.5 0 0 1 18 5.5v10L13.5 20h-6A1.5 1.5 0 0 1 6 18.5v-13A1.5 1.5 0 0 1 7.5 4Z");
}

.z6p9osteo {
  fill: currentColor;
  d: path("m18 15.5l-3.75.5l-.75 4Z");
}
</style><g class="ulnmmdpxh"><path class="x5acz0biv"/><path class="z6p9osteo"/><path class="udg3cbi9q"/></g>`,
		"fallback": "uix-sharp:size-sticker-strip",
	});
}

export default Component;
