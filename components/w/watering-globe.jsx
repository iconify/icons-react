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
		"content": `<style>.td7fghbsf {
  d: path("M6.5 7.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0ZM12 13v3m-6 0h12l-1.25 5.5h-9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z953kz5sj {
  d: path("M12 5s-1.75 2.25-1.75 3.5a1.75 1.75 0 0 0 3.5 0C13.75 7.25 12 5 12 5Z");
}
</style><g class="ulnmmdpxh"><path class="td7fghbsf"/><path class="z953kz5sj"/></g>`,
		"fallback": "uix-sharp:watering-globe",
	});
}

export default Component;
