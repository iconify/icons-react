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

.dch66f7wx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z");
}

.pfz45v9bw {
  d: path("M7 7a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm10 4a1 1 0 0 1 .857 1.514l-3 5a1 1 0 0 1-1.371.343a1 1 0 0 1-.343-1.371L19.234 13H17a1 1 0 0 1-.857-1.514l3-5a.998.998 0 0 1 1.731.029a1 1 0 0 1-.017.999L18.766 11ZM9 21a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="dch66f7wx"/><path class="pfz45v9bw"/></g>`,
		"fallback": "coolicons:plug-zap-bulk",
	});
}

export default Component;
