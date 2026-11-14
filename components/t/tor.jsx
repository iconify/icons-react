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
		"content": `<style>.unk1wks9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5C5 18 6 17 8 17h8c2 0 3 1 5.5 3.5m-15-8h11V17h-11Zm1.5-4h8.5v4H8Zm2-4h6v4h-6Z");
}
</style><path class="unk1wks9v"/>`,
		"fallback": "uix-sharp:tor",
	});
}

export default Component;
