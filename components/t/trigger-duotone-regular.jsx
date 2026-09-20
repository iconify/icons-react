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
		"content": `<style>.n_ua_kbpf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 4 -7 7h5l-7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pdu-xkbsu {
  d: path("m16 4 -7 7h5l-7 7");
}
</style><g class="nrj6p8qat"><path class="n_ua_kbpf"/><path class="pdu-xkbsu"/></g>`,
		"fallback": "iconmind:trigger-duotone-regular",
	});
}

export default Component;
