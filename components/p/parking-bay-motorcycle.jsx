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
		"content": `<style>.aarw6cciy {
  d: path("M4 2.5h16A1.5 1.5 0 0 1 21.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5Z");
}

.daj7v51yw {
  d: path("m7.5 15.5l2-5h4L12 13h-2m6.5 2.5l-2-6l-.75-2.5h-2");
}

.qoor514em {
  d: path("M5 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aarw6cciy"/><path class="qoor514em"/><path class="daj7v51yw"/></g>`,
		"fallback": "uix-sharp:parking-bay-motorcycle",
	});
}

export default Component;
