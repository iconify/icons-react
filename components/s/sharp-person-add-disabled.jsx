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
		"content": `<style>.b22fnhm6d {
  fill: currentColor;
  d: path("M14.48 11.95c.17.02.34.05.52.05c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4c0 .18.03.35.05.52zm2.21 2.21L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84M0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4l1.41-1.41L1.41 1.71zM6.88 10H6v-.88z");
}
</style><path class="b22fnhm6d"/>`,
		"fallback": "ic:sharp-person-add-disabled",
	});
}

export default Component;
