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

.k32qtlbfv {
  d: path("M8 7v2h4V7z");
}

.zizb5ob1s {
  d: path("M7.5 1a.5.5 0 0 1 .5.5V3h6.5A1.5 1.5 0 0 1 16 4.5v7a.5.5 0 0 1-.084.277L14 14.651V16.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-1.849l-1.916-2.874A.5.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3H7V1.5a.5.5 0 0 1 .5-.5M7 6.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5m1 6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5");
}
</style><g class="cuyn6tgcc"><path class="k32qtlbfv"/><path class="zizb5ob1s"/></g>`,
		"fallback": "fluent:walkie-talkie-20-filled",
	});
}

export default Component;
