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
		"content": `<style>.d8c0cmbgk {
  d: path("M12 8v2.5q2 1.25 4 0V8m2 7v6m-3-3h6");
}

.f1ha8jb-a {
  d: path("m14 5.5l3.25 1.75L14 9l-3.25-1.75Z");
}

.kq6-60b2h {
  d: path("M15.2 21.5H4v-19h16v9.7M7.5 2.5v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kq6-60b2h"/><path class="f1ha8jb-a"/><path class="d8c0cmbgk"/></g>`,
		"fallback": "uix-sharp:journal-academic-plus",
	});
}

export default Component;
