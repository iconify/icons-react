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
		"content": `<style>.rvf7g4bga {
  d: path("m15.808 6.618l-1.215 6.893l-10.833-1.91l1.216-6.894Z");
}

.ujfmn8ail {
  d: path("M11.754 9.457a3.5 3.5 0 0 1 6.893 1.215m.103 4.828h.01m-3.01 3h.01m3.74 1.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rvf7g4bga"/><path class="ujfmn8ail"/></g>`,
		"fallback": "uix-sharp:sumo-salt-throw",
	});
}

export default Component;
