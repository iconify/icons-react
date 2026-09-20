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

.gyzn7pp-t {
  d: path("M216 96v120H96v-56h64V96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nlhxnr71c {
  d: path("M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 48h104v104H48Zm160 160H104v-40h56a8 8 0 0 0 8-8v-56h40Z");
}
</style><g class="cuyn6tgcc"><path class="gyzn7pp-t"/><path class="nlhxnr71c"/></g>`,
		"fallback": "ph:subtract-square-duotone",
	});
}

export default Component;
