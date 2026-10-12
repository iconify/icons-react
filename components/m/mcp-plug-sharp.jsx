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
		"content": `<style>.vxosow6mt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.75v4.5m6-4.5v4.5m-8.75 0h11.5v3.5a5.75 5.75 0 0 1-11.5 0Zm5.75 9.25v4.75M19 2.75l.27 1.98l1.98.27l-1.98.27L19 7.25l-.27-1.98L16.75 5l1.98-.27z");
}
</style><path class="vxosow6mt"/>`,
		"fallback": "iconoven:mcp-plug-sharp",
	});
}

export default Component;
