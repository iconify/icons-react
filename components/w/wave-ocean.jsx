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
		"content": `<style>.edttvfi7c {
  d: path("M12.75 18.25c1.25 0 1.25-1 2.5-1s1.25 1 2.5 1s1.25-1 2.5-1m-7.5 4h8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pic5iswxe {
  d: path("M2.75 21.25C2.75 11 8.5 4.75 15 4.75c3.6 0 6.25 2.4 6.25 5.75c0 1.5-1.25 2.5-2.5 2.5c-1.5 0-2-1.25-3.5-1.25c-2.75 0-5.75 3.75-5.75 9.5Z");
}
</style><g class="hntgybcog"><path class="pic5iswxe"/><path class="edttvfi7c"/></g>`,
		"fallback": "iconoven:wave-ocean",
	});
}

export default Component;
