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
		"content": `<style>.ci173nq1r {
  d: path("M160 56H96l32-32Zm-32 176l32-32H96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.cxyy2ybmf {
  d: path("M208 144H48a8 8 0 0 0 0 16h72v32H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 192h-24v-32h72a8 8 0 0 0 0-16m-80 76.69L115.31 208h25.38ZM48 112h160a8 8 0 0 0 0-16h-72V64h24a8 8 0 0 0 5.66-13.66l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 64h24v32H48a8 8 0 0 0 0 16m80-76.69L140.69 48h-25.38Z");
}
</style><g class="cuyn6tgcc"><path class="ci173nq1r"/><path class="cxyy2ybmf"/></g>`,
		"fallback": "ph:split-vertical-duotone",
	});
}

export default Component;
