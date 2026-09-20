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
		"content": `<style>.a0btlwb1o {
  d: path("M192 120a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8h-40V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8a40 40 0 0 1-40 40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h24v56a64.07 64.07 0 0 0 64 64h40a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 1-8-8v-48Zm-32 72h24v32h-32a48.05 48.05 0 0 1-48-48v-64a8 8 0 0 0-8-8H72V79.43A56.13 56.13 0 0 0 119.43 32H136v40a8 8 0 0 0 8 8h40v24h-40a8 8 0 0 0-8 8v56a24 24 0 0 0 24 24");
}

.cuyn6tgcc {
  fill: currentColor;
}

.hir5eb8hq {
  d: path("M144 112v56a16 16 0 0 0 16 16h32v48h-40a56 56 0 0 1-56-56v-64H64V72a48 48 0 0 0 48-48h32v48h48v40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="hir5eb8hq"/><path class="a0btlwb1o"/></g>`,
		"fallback": "ph:tumblr-logo-duotone",
	});
}

export default Component;
