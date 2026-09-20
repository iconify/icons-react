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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.mepcfzh1h {
  d: path("m10 12.5 2 -2 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tguw93wue {
  d: path("m10 9.5 2 -2 2 2");
}
</style><g class="nrj6p8qat"><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="tguw93wue"/><path class="mepcfzh1h"/></g>`,
		"fallback": "iconmind:milestone-up-outline-regular",
	});
}

export default Component;
