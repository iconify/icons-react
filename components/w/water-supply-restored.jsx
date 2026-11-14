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
		"content": `<style>.vy0lx0gao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h6a4.5 4.5 0 0 1 4.5 4.5V12H8.5v-1.5h-6m3-4.5V3m-2 0h4m4.802 14.738C11.845 16.407 10.75 15 10.75 15S9 17.25 9 18.75q0 .086.008.172t.026.169q.016.085.041.167t.058.162t.074.155t.088.147q.048.072.102.138q.055.067.116.127q.06.061.127.116q.066.054.138.102q.071.048.147.088q.076.041.155.074q.08.033.162.058t.167.041t.169.026q.086.008.172.008q.131 0 .26-.019q.13-.02.255-.059t.243-.095q.118-.057.226-.13t.205-.163t.178-.191t.147-.216q.066-.113.114-.235M15.5 18.5l2.25 2.25L22 16.5");
}
</style><path class="vy0lx0gao"/>`,
		"fallback": "uix-sharp:water-supply-restored",
	});
}

export default Component;
