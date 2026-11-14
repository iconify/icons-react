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
		"content": `<style>.faidsgbop {
  d: path("M16 10v4");
}

.mfrg26b0a {
  d: path("M2.5 7V4.5a2 2 0 0 1 2-2H7m10 0h2.5a2 2 0 0 1 2 2V7m0 10v2.5a2 2 0 0 1-2 2H17m-10 0H4.5a2 2 0 0 1-2-2V17M5 6h14v12H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w63su5bwo {
  fill: currentColor;
  d: path("m10 7.75l1.176 2.882l3.104.227l-2.378 2.009l.743 3.023L10 14.25l-2.645 1.641l.743-3.023l-2.378-2.009l3.104-.227Z");
}
</style><g class="ulnmmdpxh"><path class="mfrg26b0a"/><path class="w63su5bwo"/><path class="faidsgbop"/></g>`,
		"fallback": "uix-sharp:loyalty-scan",
	});
}

export default Component;
