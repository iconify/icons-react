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
		"content": `<style>.ay-q6xpii {
  d: path("M184 192v24a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-24Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b2d_jmgon {
  d: path("M200 24H72a24 24 0 0 0-24 24v168a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V48a8 8 0 0 1 16 0v104a8 8 0 0 0 16 0V48a24 24 0 0 0-24-24M72 40h105.37a23.8 23.8 0 0 0-1.37 8v136H64V48a8 8 0 0 1 8-8m-8 176v-16h112v16Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="ay-q6xpii"/><path class="b2d_jmgon"/></g>`,
		"fallback": "ph:towel-duotone",
	});
}

export default Component;
