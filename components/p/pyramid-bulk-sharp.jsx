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

.i8igrhb4v {
  d: path("m12.966 4.742l4 15a1 1 0 1 1-1.932.516l-4-15a1 1 0 1 1 1.932-.516");
}

.ioatf03er {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.832 4.445l10 15A1 1 0 0 1 22 21H2a1 1 0 0 1-.832-1.555l10-15a1 1 0 0 1 1.664 0");
}
</style><g class="cuyn6tgcc"><path class="ioatf03er"/><path class="i8igrhb4v"/></g>`,
		"fallback": "coolicons:pyramid-bulk-sharp",
	});
}

export default Component;
