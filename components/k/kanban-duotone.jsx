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
		"content": `<style>.bxe392_1b {
  d: path("M216 56v64h-56V56ZM40 208a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-88H40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.fk8ybjl1j {
  d: path("M216 48H40a8 8 0 0 0-8 8v152a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-48h48v16a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-8 64h-40V64h40ZM88 64v48H48V64Zm0 144H48v-80h40Zm16-64V64h48v80Zm64 32v-48h40v48Z");
}
</style><g class="cuyn6tgcc"><path class="bxe392_1b"/><path class="fk8ybjl1j"/></g>`,
		"fallback": "ph:kanban-duotone",
	});
}

export default Component;
