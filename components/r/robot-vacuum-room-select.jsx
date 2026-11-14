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
		"content": `<style>.f88g7tb8e {
  fill: currentColor;
  d: path("M9.5 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4.5Z");
}

.g3scd9x-e {
  d: path("M9.5 5H19q.098 0 .196.01q.098.009.194.028q.097.02.191.048q.094.029.184.066q.091.038.178.084q.086.046.168.101t.158.117t.145.132q.07.069.132.145t.117.158t.101.168q.046.087.084.178q.037.09.066.184q.028.094.048.191q.019.096.028.194T21 7v4.772M11.857 19H9.5m5.25-1l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f88g7tb8e"/><path class="g3scd9x-e"/></g>`,
		"fallback": "uix-sharp:robot-vacuum-room-select",
	});
}

export default Component;
