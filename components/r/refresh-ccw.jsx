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
		"content": `<style>.cdxjicbsp {
  d: path("m15.5 15l3-3l3 3");
}

.i3e_gmufr {
  d: path("m2.5 9l3 3l3-3m10 3a6.5 6.5 0 0 1-12.129 3.25");
}

.sxnh-zzrn {
  d: path("M5.5 12a6.5 6.5 0 0 1 12.129-3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sxnh-zzrn"/><path class="i3e_gmufr"/><path class="cdxjicbsp"/></g>`,
		"fallback": "uix-sharp:refresh-ccw",
	});
}

export default Component;
