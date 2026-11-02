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
		"content": `<style>.a29uejbfv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5");
}

.b-5lqlb6t {
  d: path("M11.315 10.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114m1.842 2.335a2 2 0 1 0 3.686-1.556a2 2 0 0 0-3.686 1.556");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="a29uejbfv"/><path class="b-5lqlb6t"/></g>`,
		"fallback": "coolicons:toggle-right-bulk-sharp",
	});
}

export default Component;
