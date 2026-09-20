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

.ki2vueivy {
  fill-rule: evenodd;
  d: path("M4.828 4.828a6 6 0 1 0 8.486 8.486a6 6 0 0 0-8.486-8.486M11.9 11.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 11.9 11.9");
}

.q16qzj1ip {
  d: path("M11.9 14.728a1.5 1.5 0 1 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.121 2.121zM6.707 9.914a1 1 0 1 1 0-2h4.485a1 1 0 1 1 0 2z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="ki2vueivy"/><path class="q16qzj1ip"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:loop-minus-off",
	});
}

export default Component;
