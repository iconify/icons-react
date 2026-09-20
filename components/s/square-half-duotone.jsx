import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b17wkeb9u {
  d: path("M208 56v144a8 8 0 0 1-8 8h-72V48h72a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cj10fpzvh {
  d: path("M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M56 56h64v144H56Zm144 144h-64V56h64z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="b17wkeb9u"/><path class="cj10fpzvh"/></g>`,
		"fallback": "ph:square-half-duotone",
	});
}

export default Component;
