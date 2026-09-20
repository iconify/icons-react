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
		"content": `<style>.oldmkuwnp {
  fill: currentColor;
  d: path("M13 15.5h7v-7h-7zm-2 2V13H2v-2h9V6.5h11v11zm5.5-5.5");
}
</style><path class="oldmkuwnp"/>`,
		"fallback": "material-symbols:line-end-square-outline",
	});
}

export default Component;
