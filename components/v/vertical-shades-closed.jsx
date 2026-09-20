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
		"content": `<style>.jaf19rb3s {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm4-2h1.5V5H6zm3.5 0H11V5H9.5zm3.5 0h1.5V5H13zm3.5 0H18V5h-1.5z");
}
</style><path class="jaf19rb3s"/>`,
		"fallback": "material-symbols:vertical-shades-closed",
	});
}

export default Component;
