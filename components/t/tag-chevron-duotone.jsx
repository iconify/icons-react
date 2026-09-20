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

.r_n-ils6t {
  d: path("m240 128l-45.62 68.44a8 8 0 0 1-6.66 3.56H32l48-72l-48-72h155.72a8 8 0 0 1 6.66 3.56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rf9y1ob5t {
  d: path("M246.66 123.56L201 55.12A16 16 0 0 0 187.72 48H32a8 8 0 0 0-6.66 12.44L70.39 128l-45 67.56A8 8 0 0 0 32 208h155.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88M187.72 192H47l39.71-59.56a8 8 0 0 0 0-8.88L47 64h140.72l42.67 64Z");
}
</style><g class="cuyn6tgcc"><path class="r_n-ils6t"/><path class="rf9y1ob5t"/></g>`,
		"fallback": "ph:tag-chevron-duotone",
	});
}

export default Component;
