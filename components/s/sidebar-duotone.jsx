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

.e8lis1llm {
  d: path("M88 48v160H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rqzdfjbec {
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 152h16a8 8 0 0 0 0-16H40v-16h16a8 8 0 0 0 0-16H40V88h16a8 8 0 0 0 0-16H40V56h40v144H40Zm176 48H96V56h120z");
}
</style><g class="cuyn6tgcc"><path class="e8lis1llm"/><path class="rqzdfjbec"/></g>`,
		"fallback": "ph:sidebar-duotone",
	});
}

export default Component;
