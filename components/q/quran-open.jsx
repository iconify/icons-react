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
		"content": `<style>.dxb-wh2cq {
  d: path("M5.25 9.5q1.5.75 3 0c1.5-.75 2-.5 1 0m-4 3.5q1.5.75 3 0c1.5-.75 1.5-.5 1.5 0m6.99-3.34l.33.6q.14.26.43.18l.65-.19q.29-.09.2.2l-.19.65q-.08.29.18.43l.6.33q.26.14 0 .28l-.6.33q-.26.14-.18.43l.19.65q.09.29-.2.2l-.65-.19q-.29-.08-.43.18l-.33.6q-.14.26-.28 0l-.33-.6q-.14-.26-.43-.18l-.65.19q-.29.09-.2-.2l.19-.65q.08-.29-.18-.43l-.6-.33q-.26-.14 0-.28l.6-.33q.26-.14.18-.43l-.19-.65q-.09-.29.2-.2l.65.19q.29.08.43-.18l.33-.6q.14-.26.28 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iqlz_y-ts {
  d: path("M12 7C9.75 5.25 6.5 4.5 2.75 4.75v13.5c3.75-.25 7 .5 9.25 2.25c2.25-1.75 5.5-2.5 9.25-2.25V4.75c-3.75-.25-7 .5-9.25 2.25m0 0v13");
}
</style><g class="hntgybcog"><path class="iqlz_y-ts"/><path class="dxb-wh2cq"/></g>`,
		"fallback": "iconoven:quran-open",
	});
}

export default Component;
