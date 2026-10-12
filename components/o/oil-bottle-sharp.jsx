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
		"content": `<style>.ln_jfac6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 6.5l3.5-3.25M10.25 6.5h3.5v3.25L16 12l.75.75v8.5h-9.5v-8.5L8 12l2.25-2.25Zm8.25-.75L17 7.625V8.5a1.5 1.5 0 0 0 3 0v-.875z");
}
</style><path class="ln_jfac6w"/>`,
		"fallback": "iconoven:oil-bottle-sharp",
	});
}

export default Component;
