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
		"content": `<style>.ldlc_jldc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.27 3.17l1.21 1.91l.27.42l.04.5l.92 12l.04.5h-5.5l.04-.5l.92-12l.04-.5l.27-.42l1.21-1.91l.27-.42zM6.75 18.5h10.5v2.75H6.75zm3.5-13h3.5");
}
</style><path class="ldlc_jldc"/>`,
		"fallback": "iconoven:obelisk-sharp",
	});
}

export default Component;
