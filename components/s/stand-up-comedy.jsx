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
		"content": `<style>.at8f_wbyp {
  d: path("m10.25 9l.75 4.5h2l.75-4.5M12 13.5v8m-4 0h8");
}

.carm-3b9v {
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="carm-3b9v"/><path class="at8f_wbyp"/></g>`,
		"fallback": "uix-sharp:stand-up-comedy",
	});
}

export default Component;
