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

.rycj10btr {
  d: path("M6 13V21M12 13V21M18 13V21");
}

.xi2w5nt2z {
  stroke-opacity: 0.4;
  d: path("M3 6H10M7 3L10 6L7 9M21 6H14M17 3L14 6L17 9");
}
</style><g class="nrj6p8qat"><path class="xi2w5nt2z"/><path class="rycj10btr"/></g>`,
		"fallback": "keyline-icons:list-collapse-horizontal-duotone",
	});
}

export default Component;
