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

.rfnq94b5c {
  d: path("m229.67 133.62l-96 96a7.94 7.94 0 0 1-11.24 0l-96-96a7.94 7.94 0 0 1 0-11.24l96.05-96a7.94 7.94 0 0 1 11.24 0l96 96.05a7.94 7.94 0 0 1-.05 11.19");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wnae0myhe {
  d: path("M128 72a8 8 0 0 1 8 8v56a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8m-12 100a12 12 0 1 0 12-12a12 12 0 0 0-12 12m124-44a15.85 15.85 0 0 1-4.67 11.28l-96.05 96.06a16 16 0 0 1-22.56 0l-96-96.06a16 16 0 0 1 0-22.56l96.05-96.06a16 16 0 0 1 22.56 0l96.05 96.06A15.85 15.85 0 0 1 240 128m-16 0l-96-96l-96 96l96 96Z");
}
</style><g class="cuyn6tgcc"><path class="rfnq94b5c"/><path class="wnae0myhe"/></g>`,
		"fallback": "ph:warning-diamond-duotone",
	});
}

export default Component;
