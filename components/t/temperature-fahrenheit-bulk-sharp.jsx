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

.k30fyucjg {
  d: path("M16 6a2 2 0 0 0-2 2v3h5a1 1 0 0 1 0 2h-5v6a1 1 0 0 1-2 0V8a4 4 0 0 1 4-4h5a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="f0ldmmbbm"/><path class="k30fyucjg"/></g>`,
		"fallback": "coolicons:temperature-fahrenheit-bulk-sharp",
	});
}

export default Component;
