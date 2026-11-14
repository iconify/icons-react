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
		"content": `<style>.bg5_o71pf {
  d: path("M14.5 14H4V3.5h15v8.1M2.5 17h8.7");
}

.hbv8nob4p {
  d: path("M6.5 9h2l1.25-2.5l1.5 5L12.5 9h4m-2.25 9L18 14.5l3.75 3.5");
}

.trn1rwa5g {
  d: path("M15.5 17v4.5h5V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bg5_o71pf"/><path class="hbv8nob4p"/><path class="trn1rwa5g"/></g>`,
		"fallback": "uix-sharp:remote-patient-monitoring",
	});
}

export default Component;
