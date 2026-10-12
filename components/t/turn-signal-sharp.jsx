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
		"content": `<style>.hrgbspbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.3 11.49l4.65-4.23l.55-.51v3h2.25v4.5H8.5v3l-.55-.51l-4.65-4.23l-.55-.51zm17.4 0l-4.65-4.23l-.55-.51v3h-2.25v4.5h2.25v3l.55-.51l4.65-4.23l.55-.51z");
}
</style><path class="hrgbspbzw"/>`,
		"fallback": "iconoven:turn-signal-sharp",
	});
}

export default Component;
