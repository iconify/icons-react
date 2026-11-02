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

.hug0rshgv {
  d: path("m9.4 10.2l4-3a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.599.2c.216 0 .426.07.599.2l4 3a1 1 0 0 1-1.2 1.6l-4-3a1 1 0 0 1 .599-1.8a1 1 0 0 1-.599-1.8");
}

.r65c07b1e {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.949 8.316a4.162 4.162 0 1 1-7.898-2.632a4.162 4.162 0 0 1 7.898 2.632m-10 5a4.162 4.162 0 1 1-7.898-2.632a4.162 4.162 0 0 1 7.898 2.632m10 5a4.162 4.162 0 1 1-7.898-2.632a4.162 4.162 0 0 1 7.898 2.632");
}
</style><g class="cuyn6tgcc"><path class="r65c07b1e"/><path class="hug0rshgv"/></g>`,
		"fallback": "coolicons:share-alt-bulk-round",
	});
}

export default Component;
