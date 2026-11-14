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

.jw-581bzs {
  d: path("M14.4 21.5H4v-19h16v10.6M7.5 2.5v19");
}

.p_toztt7f {
  d: path("M12 8v2.5q2 1.25 4 0V8m-.75 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jw-581bzs"/><path class="f1ha8jb-a"/><path class="p_toztt7f"/></g>`,
		"fallback": "uix-sharp:journal-academic-search",
	});
}

export default Component;
