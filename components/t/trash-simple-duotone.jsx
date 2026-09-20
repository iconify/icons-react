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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.n3eg_ob3b {
  d: path("M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qr-0lllzy {
  d: path("M216 48H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16m-24 160H64V64h128ZM80 24a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8");
}
</style><g class="cuyn6tgcc"><path class="n3eg_ob3b"/><path class="qr-0lllzy"/></g>`,
		"fallback": "ph:trash-simple-duotone",
	});
}

export default Component;
