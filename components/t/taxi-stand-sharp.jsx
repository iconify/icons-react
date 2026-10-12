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
		"content": `<style>.a4jzribex {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 15.75h.01m6.74 0h.01");
}

.gvf_9uzvg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.11 14.57l1.03-2.64l.36-.93h9.75l.36.93l1.03 2.64l.36.93v3.75H2.75V15.5z");
}

.oo-2i_9pr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 19.25v2m9.25-2v2m5-14v14M7.75 8h3.5m5.5-5.25h4.5v4.5h-4.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="gvf_9uzvg"/><path class="a4jzribex"/><path class="oo-2i_9pr"/></g>`,
		"fallback": "iconoven:taxi-stand-sharp",
	});
}

export default Component;
