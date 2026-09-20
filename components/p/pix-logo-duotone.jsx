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

.fzan61moa {
  d: path("m235.34 116.72l-96.06-96.06a16 16 0 0 0-22.56 0l-96.06 96.06a16 16 0 0 0 0 22.56l96.06 96.06a16 16 0 0 0 22.56 0l96.06-96.06a16 16 0 0 0 0-22.56M128 32l56 56h-24a8 8 0 0 0-5.66 2.34L128 116.68l-26.34-26.34A8 8 0 0 0 96 88H72Zm-72 72h36.68l24 24l-24 24H56l-24-24Zm72 120l-56-56h24a8 8 0 0 0 5.66-2.34L128 139.31l26.34 26.35A8 8 0 0 0 160 168h24Zm72-72h-36.68l-24-24l24-24H200l24 24Z");
}

.rfnq94b5c {
  d: path("m229.67 133.62l-96 96a7.94 7.94 0 0 1-11.24 0l-96-96a7.94 7.94 0 0 1 0-11.24l96.05-96a7.94 7.94 0 0 1 11.24 0l96 96.05a7.94 7.94 0 0 1-.05 11.19");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="rfnq94b5c"/><path class="fzan61moa"/></g>`,
		"fallback": "ph:pix-logo-duotone",
	});
}

export default Component;
