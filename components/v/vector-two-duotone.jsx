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

.hbb5s2p4j {
  d: path("M224 56v136H80V40h128a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q691oufgg {
  d: path("m229.66 197.66l-32 32a8 8 0 0 1-11.32-11.32L204.69 200H80a8 8 0 0 1-8-8V59.31L53.66 77.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L88 59.31V184h116.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32");
}
</style><g class="cuyn6tgcc"><path class="hbb5s2p4j"/><path class="q691oufgg"/></g>`,
		"fallback": "ph:vector-two-duotone",
	});
}

export default Component;
