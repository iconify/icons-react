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
		"content": `<style>.qeug37b8f {
  fill: currentColor;
  d: path("M6 2v13H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm2 0h11c.446 0 .839.296.962.725l2 7Q22 9.86 22 10v4a1 1 0 0 1-1 1h-5v4a3 3 0 1 1-6 0v-1c0-1.27-.804-2.405-2-2.83Z");
}
</style><path class="qeug37b8f"/>`,
		"fallback": "coolicons:thumbs-down-fill-sharp",
	});
}

export default Component;
