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
		"content": `<style>.m7p35uguv {
  d: path("M12 17v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.zawn-gbuw {
  d: path("M6 10a6 7 0 1 1 12 0 6 7 0 1 1 -12 0");
}
</style><g class="nrj6p8qat"><path class="zawn-gbuw"/><path class="m7p35uguv"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:mirror-outline-regular",
	});
}

export default Component;
