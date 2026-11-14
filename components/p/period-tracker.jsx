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
		"content": `<style>.agdwc8bbn {
  fill: currentColor;
  d: path("M15.5 12.5c1.5 1.75 2.25 2.75 2.25 3.75c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25c0-1 .75-2 2.25-3.75Z");
}

.arn6nbbmy {
  d: path("M7.5 13.5h.01m3.74 0h.01M7.5 17.25h.01m3.74 0h.01");
}

.sa23nmb2h {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sa23nmb2h"/><path class="agdwc8bbn"/><path class="arn6nbbmy"/></g>`,
		"fallback": "uix-sharp:period-tracker",
	});
}

export default Component;
