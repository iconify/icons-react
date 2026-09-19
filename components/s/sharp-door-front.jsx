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
		"content": `<style>.ik3ck5bam {
  fill: currentColor;
  d: path("M19 19V3H5v16H3v2h18v-2zm-4-6h-2v-2h2z");
}
</style><path class="ik3ck5bam"/>`,
		"fallback": "ic:sharp-door-front",
	});
}

export default Component;
