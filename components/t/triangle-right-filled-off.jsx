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
		"content": `<style>.a47qx_bzi {
  fill-rule: evenodd;
  d: path("M15.499 9.134a1 1 0 0 1 0 1.732l-10 5.769A1 1 0 0 1 4 15.769V4.23a1 1 0 0 1 1.5-.866z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.w2yrdejhq {
  fill-rule: evenodd;
  d: path("M5.5 16.635a1 1 0 0 1-1.5-.866V4.23a1 1 0 0 1 1.5-.866l9.999 5.769a1 1 0 0 1 0 1.732zM10.997 10L7 7.694v4.612z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="a47qx_bzi"/><path clip-rule="evenodd" class="w2yrdejhq"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:triangle-right-filled-off",
	});
}

export default Component;
