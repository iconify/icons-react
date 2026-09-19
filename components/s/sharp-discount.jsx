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
		"content": `<style>.i1kmxjbam {
  fill: currentColor;
  d: path("M12.79 21L3 11.21v2.83l9.79 9.79l9.04-9.04l-1.42-1.41z");
}

.p8xec_bop {
  fill: currentColor;
  d: path("m3 9.04l9.79 9.79l9.04-9.04L12.04 0H3zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5");
}
</style><path class="i1kmxjbam"/><path class="p8xec_bop"/>`,
		"fallback": "ic:sharp-discount",
	});
}

export default Component;
