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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v1yjf7bhh {
  stroke-opacity: 0.4;
  d: path("M7 5V3h14v12");
}

.ztbg_oopf {
  d: path("M3 9h14v12H3Zm0 0l6 6h2l6-6");
}
</style><g class="nrj6p8qat"><path class="v1yjf7bhh"/><path class="ztbg_oopf"/></g>`,
		"fallback": "coolicons:mails-duocolor-sharp",
	});
}

export default Component;
