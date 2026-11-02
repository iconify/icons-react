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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ev_5b6boc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m18 14.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L19.414 16l2.293 2.293a.999.999 0 1 1-1.414 1.414L18 17.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L16.586 16l-2.293-2.293a.999.999 0 1 1 1.414-1.414Z");
}

.ss3d290uf {
  d: path("M8 4h5a1 1 0 0 1 0 2H9v13a1 1 0 0 1-2 0V6H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="ev_5b6boc"/><path class="ss3d290uf"/></g>`,
		"fallback": "coolicons:remove-formatting-bulk-round",
	});
}

export default Component;
