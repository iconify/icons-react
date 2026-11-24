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
		"content": `<style>.nfnuaabzh {
  stroke-opacity: 0.4;
  d: path("M9.172 4.172A4 4 0 0 1 16 7v2M2 3l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-carab-v {
  d: path("M20 21H4V9h4m6 0h6v6");
}
</style><g class="nrj6p8qat"><path class="nfnuaabzh"/><path class="o-carab-v"/></g>`,
		"fallback": "coolicons:lock-off-duocolor-sharp",
	});
}

export default Component;
