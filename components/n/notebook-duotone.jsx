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

.fv11s41bx {
  d: path("M184 112a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m48-88v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h24V48H48Zm160 0V48H88v160z");
}

.zyu4c_buk {
  d: path("M80 40v176H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="zyu4c_buk"/><path class="fv11s41bx"/></g>`,
		"fallback": "ph:notebook-duotone",
	});
}

export default Component;
