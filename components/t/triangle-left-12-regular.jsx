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
		"content": `<style>.fmd8prbnz {
  fill: currentColor;
  d: path("M1.459 6.786a.903.903 0 0 1 0-1.572l7.169-4.092C9.238.774 10 1.211 10 1.91v8.182c0 .698-.762 1.135-1.372.787zM2.119 6l6.864 3.917V2.083z");
}
</style><path class="fmd8prbnz"/>`,
		"fallback": "fluent:triangle-left-12-regular",
	});
}

export default Component;
