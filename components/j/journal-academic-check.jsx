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
		"content": `<style>.f1ha8jb-a {
  d: path("m14 5.5l3.25 1.75L14 9l-3.25-1.75Z");
}

.k74_8vbtd {
  d: path("M12 8v2.5q2 1.25 4 0V8m-1.25 10l2 2L21 15.75");
}

.l4s2bebsp {
  d: path("M14.3 21.5H4v-19h16v10.3m0 7.9v.8h-.8M7.5 2.5v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4s2bebsp"/><path class="f1ha8jb-a"/><path class="k74_8vbtd"/></g>`,
		"fallback": "uix-sharp:journal-academic-check",
	});
}

export default Component;
