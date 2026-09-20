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
		"content": `<style>.v3enp2b1s {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25V12h6.75V4.5zm6.5 0V12h6.75V6.25a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="v3enp2b1s"/>`,
		"fallback": "fluent:layout-row-two-split-top-focus-bottom-24-filled",
	});
}

export default Component;
