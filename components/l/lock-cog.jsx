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
		"content": `<style>.cms10nbws {
  d: path("m11.442 13.579l.027-1.032h1.062l.027 1.032l.826.477l.907-.492l.532.92l-.881.539v.954l.881.539l-.532.92l-.907-.492l-.826.477l-.027 1.032h-1.062l-.027-1.032l-.826-.477l-.907.492l-.532-.92l.881-.539v-.954l-.881-.539l.532-.92l.907.492Z");
}

.hpjl4rq7a {
  d: path("M4.5 10h15v11h-15ZM8 10V7a4 4 0 0 1 8 0v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpjl4rq7a"/><path class="cms10nbws"/></g>`,
		"fallback": "uix-sharp:lock-cog",
	});
}

export default Component;
