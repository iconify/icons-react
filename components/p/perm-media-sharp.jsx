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
		"content": `<style>.ybigkacrk {
  fill: currentColor;
  d: path("M2 19.77V7.076h1v11.692h16v1zm3-3V3h6.577l2 2H22v11.77zM9.461 13h8.693l-2.758-3.654l-2.454 3.077l-1.588-1.884z");
}
</style><path class="ybigkacrk"/>`,
		"fallback": "material-symbols-light:perm-media-sharp",
	});
}

export default Component;
