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
		"content": `<style>.mdaybeb_r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 12q-.001 4.039 2.855 6.896T12 21.753t6.895-2.857T21.75 12q.001-4.039-2.855-6.896T12 2.247q-4.04 0-6.895 2.857Q2.249 7.961 2.25 12m2.5 0q0-2.25 2.25-2.25h10q2.25 0 2.25 2.25T17 14.25H7q-2.25 0-2.25-2.25");
}
</style><path class="mdaybeb_r"/>`,
		"fallback": "uix-solid:screw-head-slotted",
	});
}

export default Component;
