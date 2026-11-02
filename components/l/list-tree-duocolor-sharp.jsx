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
		"content": `<style>.auf36vbch {
  d: path("M8 6h12m-8 6h8m-8 6h8");
}

.bbo2q_xwn {
  stroke-opacity: 0.4;
  d: path("M4 6v12h4m-4-6h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bbo2q_xwn"/><path class="auf36vbch"/></g>`,
		"fallback": "coolicons:list-tree-duocolor-sharp",
	});
}

export default Component;
