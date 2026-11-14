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
		"content": `<style>.jlp350bkg {
  d: path("M6 10.5h12l-1.5 6.75h-9Zm6 0V7m0 .5c-2.5 0-4.5-1.5-4.5-4C10 3.5 12 5 12 7.5Zm0-.5c0-2.5 2-4 4.5-4c0 2.5-2 4-4.5 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wu13l-5vt {
  d: path("M2.5 14q2.5-1.5 5 0t5 0t5 0t4 0M3 20.75q2.5-1.25 5 0t5 0t5 0t3 0");
}
</style><g class="ulnmmdpxh"><path class="jlp350bkg"/><path class="wu13l-5vt"/></g>`,
		"fallback": "uix-sharp:watering-too-much",
	});
}

export default Component;
