import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ehej3-bmx {
  fill: var(--svg-color--2f2f2f, #2f2f2f);
}

.urbcck34z {
  d: path("M.24 64c0 35.21 28.54 63.77 63.76 63.77c35.21 0 63.77-28.55 63.77-63.77S99.22.23 64 .23S.24 28.78.24 64");
}

.xcu7am7-l {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M-24.89-17.32H64v158.99h-88.89z");
}
</style><defs><path id="SVGVGEn6d0G" class="urbcck34z"/></defs><use href="#SVGVGEn6d0G" class="ehej3-bmx"/><clipPath id="SVGuBShpeNa"><use href="#SVGVGEn6d0G"/></clipPath><path clip-path="url(#SVGuBShpeNa)" class="xcu7am7-l"/>`,
		"fallback": "noto-v1:last-quarter-moon",
	});
}

export default Component;
