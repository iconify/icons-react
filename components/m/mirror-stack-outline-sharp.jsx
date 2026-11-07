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
		"content": `<style>.w5u4-wb8u {
  fill: currentColor;
  d: path("M13.423 17.23v-1H18V4h-6.423v3.039h-1V3H19v14.23zM6 20h6.423V7.789H6zm-1 1V6.789h8.423V21zm1-1V7.789zM18 4.596V4v12.23z");
}
</style><path class="w5u4-wb8u"/>`,
		"fallback": "material-symbols-light:mirror-stack-outline-sharp",
	});
}

export default Component;
