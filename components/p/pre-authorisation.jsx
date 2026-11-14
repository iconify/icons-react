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
		"content": `<style>.mvhfu0bad {
  d: path("M12.3 19H3V2.5h13v9");
}

.nh2h8crka {
  d: path("M5.5 9.5c0-2.5 1.75-4 4-4s4 1.5 4 4Zm4 0V12c0 .75-.5 1.25-1.25 1.25S7 12.75 7 12m-1 4h5.5m2.75.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3.5 1.5l3.75 3.75m-1.75-1.75l-1 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mvhfu0bad"/><path class="nh2h8crka"/></g>`,
		"fallback": "uix-sharp:pre-authorisation",
	});
}

export default Component;
