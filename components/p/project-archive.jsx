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
		"content": `<style>.t7snhjbfx {
  d: path("m9.5 15l2.5 2.5l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj0pkaczv {
  d: path("M3 4h18v4.5H3Zm1.5 4.5v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-10M12 11.25v6.25");
}
</style><g class="ulnmmdpxh"><path class="xj0pkaczv"/><path class="t7snhjbfx"/></g>`,
		"fallback": "uix-sharp:project-archive",
	});
}

export default Component;
