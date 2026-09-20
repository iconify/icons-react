import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vdava9btv {
  fill: currentColor;
  d: path("M10.541 6.786a.903.903 0 0 0 0-1.572L3.372 1.122C2.762.774 2 1.211 2 1.91v8.182c0 .698.762 1.135 1.372.787z");
}
</style><path class="vdava9btv"/>`,
		"fallback": "fluent:triangle-right-12-filled",
	});
}

export default Component;
