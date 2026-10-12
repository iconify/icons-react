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
		"content": `<style>.sru1qs8cb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 15.75l13-13M5.5 18.5l13-13M8.25 21.25l13-13M11.5 5.5l7 7m-13-1l7 7");
}
</style><path class="sru1qs8cb"/>`,
		"fallback": "iconoven:rebar-sharp",
	});
}

export default Component;
