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
		"content": `<style>.ow2t-vbas {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75v5.5h5.5M12 13v4.5");
}

.s43l187bp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x7eoggbuh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.25h.01");
}
</style><g class="ux2u0rbkq"><path class="s43l187bp"/><path class="ow2t-vbas"/><path class="x7eoggbuh"/></g>`,
		"fallback": "iconoven:readme-file-sharp",
	});
}

export default Component;
