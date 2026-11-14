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
		"content": `<style>.c-2f94xtg {
  d: path("M12.428 18H3.5q-.098 0-.195-.019t-.188-.057t-.173-.093t-.151-.124t-.124-.151t-.093-.173t-.057-.188T2.5 17V3.5q0-.098.019-.195t.057-.188t.093-.173q.054-.081.124-.151t.151-.124q.082-.055.173-.093t.188-.057T3.5 2.5H20q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T21 3.5v10.386M2.5 7H21");
}

.grtrm2ayd {
  d: path("M6 10h5.5v4.5H6Zm8.25.5h3.25m-2.25 7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c-2f94xtg"/><path class="grtrm2ayd"/></g>`,
		"fallback": "uix-sharp:news-website-search",
	});
}

export default Component;
