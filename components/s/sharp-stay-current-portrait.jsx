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
		"content": `<style>.me47m4bso {
  fill: currentColor;
  d: path("M19 1.01L5.01 1v22H19zM17 19H7V5h10z");
}
</style><path class="me47m4bso"/>`,
		"fallback": "ic:sharp-stay-current-portrait",
	});
}

export default Component;
