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

.pikkadimy {
  d: path("M6 6v15h12V6M4 6h16M8 6V3h8v3");
}

.sju9b47kv {
  stroke-opacity: 0.4;
  d: path("M10 10v7m4-7v7");
}
</style><g class="nrj6p8qat"><path class="sju9b47kv"/><path class="pikkadimy"/></g>`,
		"fallback": "coolicons:trash-full-duocolor-sharp",
	});
}

export default Component;
