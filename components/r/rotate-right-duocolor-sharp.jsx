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
		"content": `<style>.f19qm5bcq {
  stroke-opacity: 0.4;
  d: path("M12 6H5v4m4-7l3 3l-3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xd3b4uwlw {
  d: path("M5 14v6h14V6h-3");
}
</style><g class="nrj6p8qat"><path class="f19qm5bcq"/><path class="xd3b4uwlw"/></g>`,
		"fallback": "coolicons:rotate-right-duocolor-sharp",
	});
}

export default Component;
