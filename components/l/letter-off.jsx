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
		"content": `<style>.aryxucb_t {
  fill-rule: evenodd;
  d: path("m17.648 5.261l-7.045 6a1 1 0 0 1-1.301-.004l-6.955-6C1.645 4.652 2.073 3.5 3 3.5h14c.93 0 1.356 1.158.648 1.761M5.69 5.5l4.27 3.683L14.282 5.5z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.y75d9fjof {
  fill-rule: evenodd;
  d: path("M17 3.5H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-13 11v-9h12v9z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="y75d9fjof"/><path clip-rule="evenodd" class="aryxucb_t"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:letter-off",
	});
}

export default Component;
