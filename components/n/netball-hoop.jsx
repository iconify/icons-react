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
		"content": `<style>.l641au4zo {
  d: path("M6.25 3v18m-2.5 0h5M6.25 7h4m0 0a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0Z");
}

.om0-80bys {
  d: path("m12.75 8.5l1 6.5h3l1-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l641au4zo"/><path class="om0-80bys"/></g>`,
		"fallback": "uix-sharp:netball-hoop",
	});
}

export default Component;
