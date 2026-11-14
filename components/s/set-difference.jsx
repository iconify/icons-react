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
		"content": `<style>.eriu-9buc {
  d: path("M2.5 12A6.25 6.25 0 1 0 15 12a6.25 6.25 0 1 0-12.5 0Z");
}

.gt8aphbsl {
  fill: currentColor;
  d: path("M4.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wn3d4hbqw {
  d: path("M9 12a6.25 6.25 0 1 0 12.5 0A6.25 6.25 0 1 0 9 12Z");
}
</style><g class="ulnmmdpxh"><path class="eriu-9buc"/><path class="wn3d4hbqw"/><path class="gt8aphbsl"/></g>`,
		"fallback": "uix-sharp:set-difference",
	});
}

export default Component;
