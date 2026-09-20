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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.pmf1mrb2a {
  fill: var(--svg-color--3fbced, #3fbced);
  d: path("m12 18.751l-3.644-2.268l-1.897 1.146L12 21l5.619-3.38l-1.912-1.142L12 18.756zm0-13.38L6.933 8.054l-2.034-.888L12 3l7.219 4.161l-2.156.893L12 5.376z");
}

.s0doobw3b {
  fill: var(--svg-color--136aad, #136aad);
  d: path("m4.683 8.17l1.951.976v4.682L12 10.863l5.366 2.965V9.146l1.951-.976v8.976L12 13.096l-7.317 4.05z");
}
</style><g class="ft5dv1b6b"><path class="s0doobw3b"/><path class="pmf1mrb2a"/></g>`,
		"fallback": "token-branded:wan",
	});
}

export default Component;
