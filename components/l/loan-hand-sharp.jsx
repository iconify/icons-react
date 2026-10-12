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
		"content": `<style>.cf4-h0bot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.75v7.5m3-6.5h2.5l2.1-1.1l.443-.245l.507-.005h3.95v3H11.5m-5.75 4.35h6.6l1.037-.005l.813-.645l5.6-4.4l1.099-1.014l-1.85-2.35l-1.099 1.014l-3.2 2.5M9.98 5.47a3.75 3.75 0 0 1 7.04 0m.61-1.66l-.61 1.66l-1.53-.88m1.53 3.44a3.75 3.75 0 0 1-7.04 0m-.61 1.66l.61-1.66l1.53.88");
}
</style><path class="cf4-h0bot"/>`,
		"fallback": "iconoven:loan-hand-sharp",
	});
}

export default Component;
