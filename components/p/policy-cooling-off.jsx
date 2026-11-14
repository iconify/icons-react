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
		"content": `<style>.bprf6vbci {
  d: path("m10.5 11.75l-2 2l2 2");
}

.hcyd1clvm {
  d: path("M3.5 4.5h17v17h-17Zm0 4.5h17M8 2.5V6m8-3.5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbkq17beg {
  d: path("M8.5 13.75H14a2.25 2.25 0 0 1 0 4.5h-3.5");
}
</style><g class="ulnmmdpxh"><path class="hcyd1clvm"/><path class="xbkq17beg"/><path class="bprf6vbci"/></g>`,
		"fallback": "uix-sharp:policy-cooling-off",
	});
}

export default Component;
