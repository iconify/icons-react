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

.gjo-9sz6n {
  d: path("M6.793 11.293a1 1 0 1 0 1.414 1.414l8.5-8.5a1 1 0 0 0-1.414-1.414z");
}

.haosz1bif {
  fill-rule: evenodd;
  d: path("M2 5.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M2 14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.yi6zc2_0n {
  d: path("M16.707 15.293a1 1 0 0 1-1.414 1.414l-8.5-8.5a1 1 0 0 1 1.414-1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="haosz1bif"/><path class="yi6zc2_0n"/><path class="gjo-9sz6n"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:scissors-off",
	});
}

export default Component;
