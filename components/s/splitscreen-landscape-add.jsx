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
		"content": `<style>.rpecpab-g {
  fill: currentColor;
  d: path("M19 8V6h-2V4h2V2h2v2h2v2h-2v2zM6 16h5V8H6zm16-6.425V18q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h11.1q-.05.25-.075.5T15 5q0 .85.263 1.613T16 8h-3v8h5V9.575q.45.2.963.313T20 10t1.025-.112t.975-.313");
}
</style><path class="rpecpab-g"/>`,
		"fallback": "material-symbols:splitscreen-landscape-add",
	});
}

export default Component;
