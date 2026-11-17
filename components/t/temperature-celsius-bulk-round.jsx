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

.f0ldmmbbm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.236 5.832A3 3 0 1 1 7.763 8.17a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}

.nuutkyboq {
  d: path("M18 6h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2a1 1 0 0 1 2 0a3.98 3.98 0 0 1-1.172 2.828A3.98 3.98 0 0 1 18 20h-2a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h2c1.064 0 2.078.418 2.828 1.172A3.98 3.98 0 0 1 22 8a1 1 0 0 1-2 0a2 2 0 0 0-2-2");
}
</style><g class="cuyn6tgcc"><path class="f0ldmmbbm"/><path class="nuutkyboq"/></g>`,
		"fallback": "coolicons:temperature-celsius-bulk-round",
	});
}

export default Component;
