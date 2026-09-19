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
		"content": `<style>.bi7egzbxv {
  fill: currentColor;
  d: path("M5.01 1v22H19V1zM17 19H7V5h10z");
}
</style><path class="bi7egzbxv"/>`,
		"fallback": "ic:sharp-stay-primary-portrait",
	});
}

export default Component;
