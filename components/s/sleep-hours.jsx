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
		"content": `<style>.lkyqd63jr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v16m0-9.5h16q.098 0 .196.01q.098.009.194.028q.097.02.191.048q.094.029.184.066q.091.038.178.084q.086.046.168.101t.158.117t.145.132t.132.145t.117.158t.101.168q.046.087.084.178q.037.09.066.184q.028.094.048.191q.019.096.028.194t.01.196v.772M12.828 15.5H3m3-10h5.5v4H6Zm13.5 9.25a3.5 3.5 0 1 0 2.25 4.75a3 3 0 0 1-2.25-4.75Z");
}
</style><path class="lkyqd63jr"/>`,
		"fallback": "uix-sharp:sleep-hours",
	});
}

export default Component;
