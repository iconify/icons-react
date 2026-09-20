import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mm4lt567i {
  fill: currentColor;
  d: path("M3 4.999a1.001 1.001 0 0 1 1.835-.555a.5.5 0 1 0 .832-.555A2 2 0 0 0 2 4.999A2 2 0 0 0 4.077 7h7.426a.5.5 0 0 0 0-1H4.077l-.038.001L4.001 6A1 1 0 0 1 3 4.999M7.499 4a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1zM4.495 8.002a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1zM2 10.5a.5.5 0 0 1 .5-.5h8.998a.5.5 0 1 1 0 1H2.5a.5.5 0 0 1-.5-.5M4.495 12a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1z");
}
</style><path class="mm4lt567i"/>`,
		"fallback": "fluent:reading-list-16-regular",
	});
}

export default Component;
