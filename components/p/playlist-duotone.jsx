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

.mb4h51blb {
  d: path("M200 192a24 24 0 1 1-24-24a24 24 0 0 1 24 24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uz0pwybtt {
  d: path("M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h120a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m72 48H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m135.66-57.7a8 8 0 0 1-10 5.36L208 122.75V192a32.05 32.05 0 1 1-16-27.69V112a8 8 0 0 1 10.3-7.66l40 12a8 8 0 0 1 5.36 9.96M192 192a16 16 0 1 0-16 16a16 16 0 0 0 16-16");
}
</style><g class="cuyn6tgcc"><path class="mb4h51blb"/><path class="uz0pwybtt"/></g>`,
		"fallback": "ph:playlist-duotone",
	});
}

export default Component;
