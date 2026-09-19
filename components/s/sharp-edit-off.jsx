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
		"content": `<style>.von7m2dzu {
  fill: currentColor;
  d: path("m21.41 6.33l-3.75-3.75l-2.53 2.54l3.75 3.75zM1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71l7.32 7.32l1.41-1.41L2.81 2.81zm16.42 5.72l-3.75-3.75l-2.52 2.52l3.75 3.75z");
}
</style><path class="von7m2dzu"/>`,
		"fallback": "ic:sharp-edit-off",
	});
}

export default Component;
