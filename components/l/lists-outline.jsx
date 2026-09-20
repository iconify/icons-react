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
		"content": `<style>.cq2-7bw6z {
  fill: currentColor;
  d: path("M3 19v-2.077h2.077V19zm4.846 0v-2.077H21V19zM3 13.038v-2.077h2.077v2.077zm4.846 0v-2.077H21v2.078zM3 7.077V5h2.077v2.077zm4.846 0V5H21v2.077z");
}
</style><path class="cq2-7bw6z"/>`,
		"fallback": "material-symbols-light:lists-outline",
	});
}

export default Component;
