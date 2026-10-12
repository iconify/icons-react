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
		"content": `<style>.k5mxp943h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.25 20.75l6.19-6.19m2.12-2.12l6.19-6.19m2.75-2.57L18.78 6.6l-.25.43l-.35-.35l-.86-.86l-.35-.35l.43-.25l2.92-1.72l.43-.25zm-8.65 9.05l-.58-.58l-.35-.35l-.35.35l-1.42 1.42l-.35.35l.35.35l.58.58l.35.35l.35-.35l1.42-1.42l.35-.35zm-8.6 2.02l3.5-3.5m2.5 9.5l3.5-3.5");
}
</style><path class="k5mxp943h"/>`,
		"fallback": "iconoven:javelin-sharp",
	});
}

export default Component;
