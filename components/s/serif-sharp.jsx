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
		"content": `<style>.cj_1bl-or {
  fill: currentColor;
  d: path("M6.2 18h2.792v-.325H7.525L8.869 14h4.023l1.308 3.675h-1.392V18h4.069v-.325h-.775L11.802 6h-.51L7 17.675h-.8zM9 13.625l1.908-5.258l1.86 5.258zM3 21V3h18v18z");
}
</style><path class="cj_1bl-or"/>`,
		"fallback": "material-symbols-light:serif-sharp",
	});
}

export default Component;
