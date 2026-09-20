import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sm32udbtx {
  fill: currentColor;
  d: path("M16.5 2a.5.5 0 0 1 .5.5V4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 1 0V4a1 1 0 0 0 1 1h2V2.5a.5.5 0 0 1 1 0V5h4V2.5a.5.5 0 0 1 1 0V5h2a1 1 0 0 0 1-1V2.5a.5.5 0 0 1 .5-.5m0 16a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0V16a1 1 0 0 1 1-1h2v2.5a.5.5 0 0 0 1 0V15h4v2.5a.5.5 0 0 0 1 0V15h2a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .5.5m-14-8.5h15.005a.5.5 0 1 1 0 1H2.5a.5.5 0 0 1 0-1");
}
</style><path class="sm32udbtx"/>`,
		"fallback": "fluent:table-split-20-regular",
	});
}

export default Component;
