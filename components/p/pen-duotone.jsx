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

.nu4nfo2zt {
  d: path("M221.66 90.34L192 120l-56-56l29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u86mlqbzi {
  d: path("m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l83.67-83.66l3.48 13.9l-36.8 36.79a8 8 0 0 0 11.31 11.32l40-40a8 8 0 0 0 2.11-7.6l-6.9-27.61L227.32 96a16 16 0 0 0 0-22.63M48 208v-28.69L76.69 208Zm48-3.31L51.31 160L136 75.31L180.69 120Zm96-96L147.32 64l24-24L216 84.69Z");
}
</style><g class="cuyn6tgcc"><path class="nu4nfo2zt"/><path class="u86mlqbzi"/></g>`,
		"fallback": "ph:pen-duotone",
	});
}

export default Component;
