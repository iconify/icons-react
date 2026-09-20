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
		"content": `<style>.d4xkbclai {
  fill: var(--svg-color--152e51, #152e51);
  d: path("M8.326 4.007v10.017h.883V3.56q-.459.194-.883.446");
}

.ft5dv1b6b {
  fill: none;
}

.porvbcb6j {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.2 10.2a7.2 7.2 0 1 1-14.4 0a7.2 7.2 0 0 1 14.4 0");
}

.xdxzkhn3s {
  fill: var(--svg-color--152e51, #152e51);
  d: path("M8.76 21a3.961 3.961 0 1 0 .001-7.922a3.961 3.961 0 0 0 0 7.922");
}
</style><g class="ft5dv1b6b"><path class="porvbcb6j"/><path class="xdxzkhn3s"/><path class="d4xkbclai"/></g>`,
		"fallback": "token-branded:pendle",
	});
}

export default Component;
