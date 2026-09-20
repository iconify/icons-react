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
		"content": `<style>.xpe-1ccjd {
  fill: currentColor;
  d: path("M4.089 21.116h2.603v-2.5q0-.214.143-.357t.357-.144t.357.144t.143.356v2.5H11.5v-2.5q0-.213.143-.356t.357-.144t.357.144t.143.356v2.5h3.808v-2.5q0-.213.143-.356t.357-.144t.356.144t.144.356v2.5h2.603q.308 0 .5-.24t.097-.529l-1.231-4.23H4.723l-1.23 4.23q-.097.289.095.529t.5.24m15.978 1H3.935q-.726 0-1.19-.582q-.466-.583-.254-1.302l1.394-4.789V13q0-.633.433-1.066q.434-.434 1.067-.434h4.307V4.192q0-.961.674-1.634q.673-.673 1.634-.673t1.635.673t.673 1.634V11.5h4.307q.633 0 1.067.434q.433.433.433 1.066v2.442l1.394 4.827q.23.7-.239 1.273t-1.205.573");
}
</style><path class="xpe-1ccjd"/>`,
		"fallback": "material-symbols-light:mop-rounded",
	});
}

export default Component;
