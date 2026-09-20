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

.qd2a5rnak {
  d: path("M2 6h7");
}

.sfb1ntbvv {
  d: path("M2 11h7");
}

.u2t7v6bmy {
  fill: currentColor;
  d: path("m17 7 4 4 -4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w-gst71bz {
  d: path("m17 7 4 4 -4 4 -4 -4Z");
}

.zwghjjvbs {
  d: path("M2 16h7");
}
</style><g class="nrj6p8qat"><path class="u2t7v6bmy"/><path class="qd2a5rnak"/><path class="sfb1ntbvv"/><path class="zwghjjvbs"/><path class="w-gst71bz"/></g>`,
		"fallback": "iconmind:semantic-memory-duotone-regular",
	});
}

export default Component;
