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
		"content": `<style>.h_2bfibrz {
  fill: currentColor;
  d: path("m13.25 22.039l-.708-.714L14.887 19H8.5q-.633 0-1.066-.434Q7 18.133 7 17.5V8.69l1 1v7.695q0 .269.173.442t.443.173h6.251l-2.305-2.325l.688-.713l3.538 3.538zm3.75-6.71l-1-1V6.616q0-.27-.173-.443T15.385 6H9.133l2.306 2.325l-.689.714L7.212 5.5l3.538-3.538l.708.713L9.114 5H15.5q.633 0 1.066.434Q17 5.867 17 6.5z");
}
</style><path class="h_2bfibrz"/>`,
		"fallback": "material-symbols-light:screen-rotation-up",
	});
}

export default Component;
