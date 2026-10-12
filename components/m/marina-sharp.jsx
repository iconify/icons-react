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
		"content": `<style>.buzkcmtmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5.1v5.65H2.75l.34-.5L6.66 5L7 4.5zm-4.25 8.15h8.5l-1 2.6l-.31.803l-.86-.003H4.92l-.86.003l-.31-.803ZM17 5.1v5.65h4.25l-.34-.5L17.34 5L17 4.5zm-4.25 8.15h8.5l-1 2.6l-.31.803l-.86-.003h-4.16l-.86.003l-.31-.803Zm-10 6h18.5m-9.25 0v2M7 11v2.25M17 11v2.25");
}
</style><path class="buzkcmtmk"/>`,
		"fallback": "iconoven:marina-sharp",
	});
}

export default Component;
