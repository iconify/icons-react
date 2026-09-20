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
		"content": `<style>.v-j44fq2d {
  fill: currentColor;
  d: path("M2 19v-2h6v-6h6V5h8v2h-6v6h-6v6z");
}
</style><path class="v-j44fq2d"/>`,
		"fallback": "material-symbols:stairs-2-outline-sharp",
	});
}

export default Component;
