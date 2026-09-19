import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.algj_t5zg {
  fill: currentColor;
  d: path("M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11zM16 18H4V6h12z");
}

.dc7qbyyfr {
  fill: currentColor;
  d: path("M4 18h12V6H4zm3.38-5.17L9 15l2.62-3.5L15 16H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.n04rw0art {
  fill: currentColor;
  d: path("M11.62 11.5L9 15l-1.62-2.17L5 16h10z");
}
</style><path class="dc7qbyyfr"/><path class="n04rw0art"/><path class="algj_t5zg"/>`,
		"fallback": "ic:twotone-video-camera-back",
	});
}

export default Component;
