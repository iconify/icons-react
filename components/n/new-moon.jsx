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
		"content": `<style>.wkpsmwbzg {
  fill: var(--svg-color--2f2f2f, #2f2f2f);
  d: path("M63.8 2.38C29.73 2.38 2.11 30 2.11 64.07s27.62 61.69 61.69 61.69s61.69-27.62 61.69-61.69S97.87 2.38 63.8 2.38");
}

.y7f3g0b2i {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M63.8 127C29.11 127 .88 98.77.87 64.07C.87 29.37 29.1 1.14 63.8 1.14s62.93 28.23 62.93 62.93C126.72 98.77 98.5 127 63.8 127m0-123.38c-33.33 0-60.45 27.12-60.45 60.46c0 33.33 27.12 60.45 60.45 60.45c33.34 0 60.46-27.12 60.46-60.45c-.01-33.34-27.13-60.46-60.46-60.46");
}
</style><path class="wkpsmwbzg"/><path class="y7f3g0b2i"/>`,
		"fallback": "noto-v1:new-moon",
	});
}

export default Component;
