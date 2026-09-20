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
		"content": `<style>.y2b_vfike {
  fill: currentColor;
  d: path("m2 20l6-8l-6-8h13q.475 0 .9.213t.7.587L22 12l-5.4 7.2q-.275.375-.7.588T15 20zm4-2h9l4.5-6L15 6H6l4.5 6zm6.75-6");
}
</style><path class="y2b_vfike"/>`,
		"fallback": "material-symbols:label-important-outline",
	});
}

export default Component;
