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
		"content": `<style>.iv34jc3sr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.5 6.25h3q1.76 0 3.005 1.245T17.75 10.5v3q0 1.76-1.245 3.005T13.5 17.75h-3q-1.76 0-3.005-1.245T6.25 13.5v-3q0-1.76 1.245-3.005T10.5 6.25");
}
</style><path class="iv34jc3sr"/>`,
		"fallback": "uix-solid:square-small",
	});
}

export default Component;
