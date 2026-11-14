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
		"content": `<style>.vdmra_b-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12.5h12l-1.25 8h-9.5Zm-1.25 0c-1 0-1.5-.75-1.25-1.75c.75-3.5 4.25-6.25 8.5-6.25s7.75 2.75 8.5 6.25c.25 1-.25 1.75-1.25 1.75Zm5.25 0l.5 8m3.5-8l-.5 8m-5-11.25h.01M12 7.75h.01m3.49 1.5h.01");
}
</style><path class="vdmra_b-i"/>`,
		"fallback": "uix-sharp:muffin",
	});
}

export default Component;
