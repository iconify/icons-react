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
		"content": `<style>.s-n0uz4sf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h12.5m-12.5 5h7.5m-7.5 5h5.5m7.43-4.25h2.64l.71.71l1.51 1.51l.71.71v3.64l-.71.71l-1.51 1.51l-.71.71h-3.64l-.71-.71l-1.51-1.51l-.71-.71v-3.64l.71-.71l1.51-1.51l.71-.71zM14.5 16.5h4");
}
</style><path class="s-n0uz4sf"/>`,
		"fallback": "iconoven:stop-sequence-sharp",
	});
}

export default Component;
