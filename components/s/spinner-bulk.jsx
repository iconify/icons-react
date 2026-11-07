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
		"content": `<style>.bayn2-pjp {
  d: path("M21.214 15.893A10.003 10.003 0 0 1 2 12a1 1 0 0 1 2 0a8 8 0 0 0 16 0a1 1 0 0 1 2 0a9.9 9.9 0 0 1-.786 3.893");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ep5t0abkj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.786 8.107a9.9 9.9 0 0 1 2.143-3.178a9.9 9.9 0 0 1 3.178-2.143A9.9 9.9 0 0 1 12 2a1 1 0 0 1 0 2a7.9 7.9 0 0 0-3.114.628a8 8 0 0 0-2.543 1.715a8 8 0 0 0-1.715 2.543A7.9 7.9 0 0 0 4 12a1 1 0 0 1-2 0a9.9 9.9 0 0 1 .786-3.893");
}
</style><g class="cuyn6tgcc"><path class="ep5t0abkj"/><path class="bayn2-pjp"/></g>`,
		"fallback": "coolicons:spinner-bulk",
	});
}

export default Component;
