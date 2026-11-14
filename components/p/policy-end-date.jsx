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
		"content": `<style>.b-1ik48fy {
  d: path("M12 20.5H3.5V5h17v7M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 9.5h17");
}

.r2koodbdo {
  d: path("m19.339 14.766l1.895 1.895v2.678l-1.895 1.895h-2.678l-1.895-1.895v-2.678l1.895-1.895Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b-1ik48fy"/><path class="r2koodbdo"/></g>`,
		"fallback": "uix-sharp:policy-end-date",
	});
}

export default Component;
