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
		"content": `<style>.ccq21abbt {
  d: path("M13.5 19.986V21q0 .098-.019.195t-.057.188t-.093.173q-.054.081-.124.151t-.151.124q-.082.055-.173.093t-.188.057T12.5 22h-8q-.098 0-.195-.019t-.188-.057t-.173-.093q-.081-.054-.151-.124t-.124-.151q-.055-.082-.093-.173t-.057-.188T3.5 21V3q0-.098.019-.195t.057-.188t.093-.173q.054-.081.124-.151t.151-.124q.082-.055.173-.093t.188-.057T4.5 2h8q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T13.5 3v11.586");
}

.tq7-hupzq {
  d: path("M7 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18 22v-8m-3.25 3.25L18 14l3.25 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ccq21abbt"/><path class="tq7-hupzq"/></g>`,
		"fallback": "uix-sharp:traffic-light-arrow-straight",
	});
}

export default Component;
