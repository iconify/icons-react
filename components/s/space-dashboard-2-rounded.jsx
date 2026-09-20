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
		"content": `<style>.rzks5sb6l {
  fill: currentColor;
  d: path("M21 21V3zM5 21h6q.825 0 1.413-.587T13 19V5q0-.825-.587-1.412T11 3H5q-.825 0-1.412.588T3 5v14q0 .825.588 1.413T5 21m12 0h2q.825 0 1.413-.587T21 19v-4q0-.825-.587-1.412T19 13h-2q-.825 0-1.412.588T15 15v4q0 .825.588 1.413T17 21m0-10h2q.825 0 1.413-.587T21 9V5q0-.825-.587-1.412T19 3h-2q-.825 0-1.412.588T15 5v4q0 .825.588 1.413T17 11");
}
</style><path class="rzks5sb6l"/>`,
		"fallback": "material-symbols:space-dashboard-2-rounded",
	});
}

export default Component;
