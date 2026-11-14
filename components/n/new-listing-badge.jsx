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

.n2e1f83_t {
  d: path("m9.439 9.561l1.5-1.5a1.5 1.5 0 0 1 2.122 0l1.5 1.5a1.5 1.5 0 0 1 .439 1.06v.629a1.25 1.25 0 0 1-1.25 1.25h-3.5A1.25 1.25 0 0 1 9 11.25v-.629a1.5 1.5 0 0 1 .439-1.06");
}

.ngksr5b2h {
  d: path("M12.61 2.685za1.21 1.21 0 0 0 1.435.285a.816.816 0 0 1 1.126.467a1.21 1.21 0 0 0 1.217.813a.816.816 0 0 1 .862.862a1.21 1.21 0 0 0 .813 1.217a.816.816 0 0 1 .467 1.126a1.21 1.21 0 0 0 .285 1.435a.816.816 0 0 1 0 1.22a1.21 1.21 0 0 0-.285 1.435a.816.816 0 0 1-.467 1.126a1.21 1.21 0 0 0-.813 1.217a.816.816 0 0 1-.862.862a1.21 1.21 0 0 0-1.217.813a.816.816 0 0 1-1.126.467a1.21 1.21 0 0 0-1.435.285a.816.816 0 0 1-1.22 0a1.21 1.21 0 0 0-1.435-.285a.816.816 0 0 1-1.126-.467a1.21 1.21 0 0 0-1.217-.813a.816.816 0 0 1-.862-.862a1.21 1.21 0 0 0-.813-1.217a.816.816 0 0 1-.467-1.126a1.21 1.21 0 0 0-.285-1.435a.816.816 0 0 1 0-1.22a1.21 1.21 0 0 0 .285-1.435a.816.816 0 0 1 .467-1.126a1.21 1.21 0 0 0 .813-1.217a.816.816 0 0 1 .862-.862a1.21 1.21 0 0 0 1.217-.813a.816.816 0 0 1 1.126-.467a1.21 1.21 0 0 0 1.435-.285a.816.816 0 0 1 1.22 0M9 16l-1.5 5.5l2.25-1M15 16l1.5 5.5l-2.25-1");
}
</style><g class="hntgybcog"><path class="ngksr5b2h"/><path class="n2e1f83_t"/></g>`,
		"fallback": "uix:new-listing-badge",
	});
}

export default Component;
