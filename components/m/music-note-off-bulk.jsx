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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dqz8x2pxj {
  d: path("m2.707 3.293l18 18a.999.999 0 1 1-1.414 1.414L13 16.414V17a1 1 0 0 1-2 0v-2.586L1.293 4.707a.999.999 0 1 1 1.414-1.414M11 6c0-1.256 1.065-2.164 2.298-2.167c.399-.001.793.092 1.149.272l4 2.001a1 1 0 1 1-.894 1.788l-4-2a.6.6 0 0 0-.251-.061C13.211 5.834 13 5.876 13 6v2a1 1 0 0 1-2 0Z");
}

.q8abciafc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.315 15.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114");
}
</style><g class="cuyn6tgcc"><path class="q8abciafc"/><path class="dqz8x2pxj"/></g>`,
		"fallback": "coolicons:music-note-off-bulk",
	});
}

export default Component;
