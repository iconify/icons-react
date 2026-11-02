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

.o-0u3qnuw {
  d: path("M22 8v2a3.004 3.004 0 0 1-3 3h-5.002a1 1 0 0 0-.712.3a.96.96 0 0 0-.286.7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2v-.001c0-.796.317-1.56.881-2.122A3 3 0 0 1 14 11h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2h2a3.004 3.004 0 0 1 3 3m-11 8v4h2v-4Z");
}

.vreao_qxx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm7 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z");
}
</style><g class="cuyn6tgcc"><path class="vreao_qxx"/><path class="o-0u3qnuw"/></g>`,
		"fallback": "coolicons:paint-roller-bulk",
	});
}

export default Component;
