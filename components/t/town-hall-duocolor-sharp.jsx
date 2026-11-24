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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ut7jb2b-u {
  d: path("M17 8v7h4v6H3v-6h4V8m3 13v-4h4v4");
}

.xvhm6qbos {
  stroke-opacity: 0.4;
  d: path("M7 8a5 5 0 0 1 10 0m0 0A5 5 0 0 1 7 8m5-2v2h2");
}
</style><g class="nrj6p8qat"><path class="xvhm6qbos"/><path class="ut7jb2b-u"/></g>`,
		"fallback": "coolicons:town-hall-duocolor-sharp",
	});
}

export default Component;
