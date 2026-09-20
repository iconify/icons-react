import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.dfzkxi56c {
  d: path("M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-8 120H104v-48a8 8 0 0 0-8-8H48V48h104v48a8 8 0 0 0 8 8h48Z");
}

.vu-xkxsfg {
  d: path("M216 96v120H96v-56H40V40h120v56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="vu-xkxsfg"/><path class="dfzkxi56c"/></g>`,
		"fallback": "ph:unite-square-duotone",
	});
}

export default Component;
