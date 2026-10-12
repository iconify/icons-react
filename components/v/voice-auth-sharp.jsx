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
		"content": `<style>.gduhawo9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10v4M6 7v10M9.25 4v16M12.5 8v8m2.25-3.75h6.5v5.5h-6.5zm1.5 0V9h3.5v3.25");
}
</style><path class="gduhawo9e"/>`,
		"fallback": "iconoven:voice-auth-sharp",
	});
}

export default Component;
