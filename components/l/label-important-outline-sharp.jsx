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
		"content": `<style>.z3-tvrbfs {
  fill: currentColor;
  d: path("m2 20l6-8l-6-8h14l6 8l-6 8zm4-2h9l4.5-6L15 6H6l4.5 6zm6.75-6");
}
</style><path class="z3-tvrbfs"/>`,
		"fallback": "material-symbols:label-important-outline-sharp",
	});
}

export default Component;
