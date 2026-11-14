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
		"content": `<style>.c8evlctbp {
  d: path("M11.7 18.5H2.5V7h12.25v2.85");
}

.ntrmm052e {
  d: path("M6.25 18.5V4h5v14.5m0-14.5h4.25q.098 0 .196.01q.098.009.194.028q.097.02.191.048q.094.029.184.066q.091.038.178.084q.086.046.168.101t.158.117t.145.132q.07.069.132.145t.117.158t.101.168q.046.087.084.178q.037.09.066.184q.028.094.048.191q.019.096.028.194T17.5 6v1.022m0 3.978l3 3v6.5h-6V14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8evlctbp"/><path class="ntrmm052e"/></g>`,
		"fallback": "uix-sharp:pin-travel-agent",
	});
}

export default Component;
