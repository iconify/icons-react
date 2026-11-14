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
		"content": `<style>.ktp8nibqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.721 17.25H7L2.75 13V7L7 2.75h6L17.25 7v6l-3.457 3.457M15.5 19.25h6m-2.5-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="ktp8nibqi"/>`,
		"fallback": "uix-sharp:stop-go-penalty",
	});
}

export default Component;
