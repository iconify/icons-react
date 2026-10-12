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
		"content": `<style>.hr_mnxbgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.25h13l.2.98l1.85 9.04l.2.98H2.75l.2-.98L4.8 4.23l.2-.98zm6 0v11m-8.05-5.5h16.1M12 14.25v7m-3.5 0h7");
}
</style><path class="hr_mnxbgc"/>`,
		"fallback": "iconoven:solar-power-sharp",
	});
}

export default Component;
