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
		"content": `<style>.hcagkdbmg {
  d: path("M13.5 7.5H16v13h-2.5Zm5.25-4h2.5v17h-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x6zfq7bwe {
  fill: currentColor;
  d: path("M3 15.5h2.5v5H3Zm5.25-4h2.5v9h-2.5Z");
}
</style><g class="ulnmmdpxh"><path class="x6zfq7bwe"/><path class="hcagkdbmg"/></g>`,
		"fallback": "uix-sharp:signal-edge",
	});
}

export default Component;
