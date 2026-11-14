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
		"content": `<style>.fb8cv3u9f {
  d: path("m20 6l1.5-2");
}

.qlpdpbccs {
  d: path("M4 6v13.5M20 6v13.5m-16-6h16m-16 6h16M6 10h12v3.5H6Zm1.5-3.5h9V10h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqwmc-dnb {
  fill: currentColor;
  d: path("M4.25 21.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm14 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="qlpdpbccs"/><path class="wqwmc-dnb"/><path class="fb8cv3u9f"/></g>`,
		"fallback": "uix-sharp:linen-cart",
	});
}

export default Component;
