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
		"content": `<style>.k04vwvbgs {
  cx: 15.25px;
  cy: 17.75px;
  r: 2.5px;
}

.o2evx_fhq {
  d: path("M17.75 17.75v-8l.717 1.863L21.25 12");
}

.vhot-xehv {
  d: path("M3.75 5.75h12.5m-12.5 5h12.5m-12.5 5h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vhot-xehv"/><circle class="k04vwvbgs"/><path class="o2evx_fhq"/></g>`,
		"fallback": "iconoven:playlist-minus-sharp",
	});
}

export default Component;
