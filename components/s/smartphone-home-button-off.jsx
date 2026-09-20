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

.j4ilspb6k {
  d: path("M10 17.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.k0g0vebmi {
  fill-rule: evenodd;
  d: path("M14.5 0h-9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-9 18V2h9v16z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="k0g0vebmi"/><path class="j4ilspb6k"/></g>`,
		"fallback": "pepicons-pop:smartphone-home-button-off",
	});
}

export default Component;
