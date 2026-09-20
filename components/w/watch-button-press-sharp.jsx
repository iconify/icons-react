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
		"content": `<style>.zix1xtb8m {
  fill: currentColor;
  d: path("M19 11.98V4h1v7.98zM7.962 21l-1.12-3.934q-1.257-.739-2.05-2.087T4 12t.792-2.979q.793-1.348 2.05-2.087L7.962 3h4.077l1.119 3.935q1.258.738 2.05 2.086T16 12t-.792 2.979t-2.05 2.087L12.038 21zm5.576-5.462Q15 14.075 15 12t-1.463-3.537T10 7T6.463 8.463T5 12t1.463 3.538T10 17t3.538-1.463");
}
</style><path class="zix1xtb8m"/>`,
		"fallback": "material-symbols-light:watch-button-press-sharp",
	});
}

export default Component;
