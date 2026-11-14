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
		"content": `<style>.aq8k4hbgm {
  d: path("M3.5 3v17.5h8.4");
}

.qc9i88b_c {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxxp9korf {
  d: path("M16.5 19q1.5 1.5 3 0m-2.75-2h.01m2.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="aq8k4hbgm"/><path class="qc9i88b_c"/><path class="wxxp9korf"/></g>`,
		"fallback": "uix-sharp:mood-chart",
	});
}

export default Component;
