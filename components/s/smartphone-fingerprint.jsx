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
		"content": `<style>.hq3kwqb_b {
  d: path("M10.5 10.5a1.5 1.5 0 0 1 3 0m-5 0V13m7-2.5V13M12 10.5v4");
}

.igxmsl8nr {
  d: path("M8.5 10.5a3.5 3.5 0 0 1 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wb-3accoe {
  d: path("M6 2.5h12v19H6ZM10.5 18h3");
}
</style><g class="ulnmmdpxh"><path class="wb-3accoe"/><path class="igxmsl8nr"/><path class="hq3kwqb_b"/></g>`,
		"fallback": "uix-sharp:smartphone-fingerprint",
	});
}

export default Component;
