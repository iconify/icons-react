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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtf2j3zea {
  d: path("m11.442 17.496l-.234.125q-.163.087-.343.133q-.18.045-.365.045t-.365-.045t-.343-.133l-5.5-2.947q-.089-.048-.171-.107q-.082-.06-.156-.129q-.073-.07-.136-.149q-.064-.08-.116-.167q-.052-.086-.092-.18q-.04-.093-.067-.19q-.027-.098-.04-.198q-.014-.101-.014-.202V7.148q0-.101.014-.202q.013-.1.04-.198q.027-.097.067-.19q.04-.094.092-.18q.052-.087.116-.167q.063-.079.136-.149t.156-.129q.082-.059.171-.107l5.5-2.947q.163-.087.343-.133q.18-.045.365-.045t.365.045t.343.133l5.5 2.947q.089.048.171.107q.082.06.156.129q.073.07.136.149q.064.08.116.167q.052.086.092.18q.04.093.067.19q.027.098.04.198q.014.101.014.202v4.319");
}

.t1i5esb4x {
  d: path("m3.5 6.25l7 3.75l7-3.75m-7 3.75v8m5.25-3.75h1.629a1.5 1.5 0 0 1 1.06.439l2.25 2.25a1.5 1.5 0 0 1 0 2.122l-1.628 1.628a1.5 1.5 0 0 1-2.122 0l-2.25-2.25a1.5 1.5 0 0 1-.439-1.06V15.75a1.5 1.5 0 0 1 1.5-1.5m1.5 3h.01");
}
</style><g class="hntgybcog"><path class="mtf2j3zea"/><path class="t1i5esb4x"/></g>`,
		"fallback": "uix:unit-economics",
	});
}

export default Component;
