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

.dclnew1xd {
  fill-rule: evenodd;
  d: path("M1.5 2a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm15 0h-13v16h13z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.xntrbh97y {
  fill-rule: evenodd;
  d: path("M7.75 16a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2h-2.5a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="dclnew1xd"/><path clip-rule="evenodd" class="xntrbh97y"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:tablet-off",
	});
}

export default Component;
