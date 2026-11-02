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
		"content": `<style>.lzezlv4aq {
  d: path("M6 5h12l2 8H4Zm6 8v6m-4 0h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.znhcflbhe {
  stroke-opacity: 0.4;
  d: path("M5 9h14m-9-4l-1 8m5-8l1 8");
}
</style><g class="nrj6p8qat"><path class="znhcflbhe"/><path class="lzezlv4aq"/></g>`,
		"fallback": "coolicons:solar-panel-duocolor-sharp",
	});
}

export default Component;
