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
		"content": `<style>.a6tpycbpp {
  d: path("M12 12v8");
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

.tu8-ndo1t {
  d: path("m4 12 5 -5h6l5 5Z");
}
</style><g class="nrj6p8qat"><path class="tu8-ndo1t"/><path class="a6tpycbpp"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:table-lamp-outline-regular",
	});
}

export default Component;
