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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iwly1cb7u {
  fill-rule: evenodd;
  d: path("M2 8v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3m3 8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z");
}

.j6m96f7cc {
  d: path("M8.72 5.625a1 1 0 0 0 1.56-1.25l-2-2.5a1 1 0 0 0-1.56 1.25z");
}

.xpaem9blu {
  d: path("M11.28 5.625a1 1 0 0 1-1.56-1.25l2-2.5a1 1 0 0 1 1.56 1.25z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="iwly1cb7u"/><path class="xpaem9blu"/><path class="j6m96f7cc"/></g>`,
		"fallback": "pepicons-pop:television",
	});
}

export default Component;
