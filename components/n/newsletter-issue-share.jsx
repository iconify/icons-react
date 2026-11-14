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
		"content": `<style>.a0ebxqtwy {
  d: path("m7 6l4 3l4-3m-8 6.5h8m-8 4h4m4 4.5l5.25-5.25m-4-.25h4.25v4.25");
}

.gstcfgbtg {
  d: path("M11.6 21.5H3.5v-19h15v10.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gstcfgbtg"/><path class="a0ebxqtwy"/></g>`,
		"fallback": "uix-sharp:newsletter-issue-share",
	});
}

export default Component;
