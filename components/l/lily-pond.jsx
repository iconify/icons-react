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
		"content": `<style>.k91o0qinl {
  d: path("M12 12.5c-3-1-6-2-7.5-4c3-.5 6 1 7.5 4Zm0 0c3-1 6-2 7.5-4c-3-.5-6 1-7.5 4Z");
}

.lfxjs9bhm {
  d: path("M4.5 14.5a7.5 2 0 1 0 15 0a7.5 2 0 1 0-15 0ZM3 20q2.25-1 4.5 0t4.5 0t4.5 0t4.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zvuvc6omc {
  d: path("M12 3.5c2.5 2 2.5 7 0 9c-2.5-2-2.5-7 0-9Z");
}
</style><g class="ulnmmdpxh"><path class="zvuvc6omc"/><path class="k91o0qinl"/><path class="lfxjs9bhm"/></g>`,
		"fallback": "uix-sharp:lily-pond",
	});
}

export default Component;
