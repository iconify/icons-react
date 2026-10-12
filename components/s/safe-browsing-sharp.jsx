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
		"content": `<style>.ba5crxb9r {
  d: path("M8.5 2.75a2.25 5.75 0 0 1 0 11.5a2.25 5.75 0 0 1 0-11.5Z");
}

.cai4nabyq {
  d: path("M11.24 13.55a5.75 5.75 0 1 1 2.43-2.53");
}

.vn_gplbjk {
  d: path("M2.75 8.5q5.75 3 11.5 0m4.42 4.39l1.66.72l.92.39v3.4l-.67.74l-2.16 2.37l-.67.74l-.67-.74l-2.16-2.37l-.67-.74V14l.92-.39l1.66-.72l.92-.39z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cai4nabyq"/><path class="ba5crxb9r"/><path class="vn_gplbjk"/></g>`,
		"fallback": "iconoven:safe-browsing-sharp",
	});
}

export default Component;
