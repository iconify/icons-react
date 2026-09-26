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
		"content": `<style>.d-01dc-tk {
  fill: currentColor;
  d: path("M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM11 13H13C16.866 13 20 16.134 20 20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20C4 16.134 7.13401 13 11 13Z");
}
</style><path class="d-01dc-tk"/>`,
		"fallback": "keyline-icons:user-fill",
	});
}

export default Component;
