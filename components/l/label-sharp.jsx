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
		"content": `<style>.rr5bbb6od {
  fill: currentColor;
  d: path("M2 20V4h14l6 8l-6 8z");
}
</style><path class="rr5bbb6od"/>`,
		"fallback": "material-symbols:label-sharp",
	});
}

export default Component;
