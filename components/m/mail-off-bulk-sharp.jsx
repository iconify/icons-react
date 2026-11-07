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

.i3b8yi-zo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4 4l16 16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm18 13.757L8.243 4H21a1 1 0 0 1 1 1Z");
}

.k2mchmb9u {
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-20-20a.999.999 0 1 1 1.414-1.414m13.121 10.293l-1.414-1.414l.867-.867l.012-.012l5-5a.999.999 0 1 1 1.414 1.414l-5 5l-.012.012Z");
}
</style><g class="cuyn6tgcc"><path class="i3b8yi-zo"/><path class="k2mchmb9u"/></g>`,
		"fallback": "coolicons:mail-off-bulk-sharp",
	});
}

export default Component;
