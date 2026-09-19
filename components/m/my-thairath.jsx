import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pkyvqzbwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.285 19.483l-.88-1.313c-.744-1.11-1.701-1.767-2.998-1.767h-8.445c-1.698 0-3.563 1.42-4.09 3.035l-7.06 21.604m-7.312 0h13.752M5.965 6.959l.928 1.354C7.767 9.588 7.935 9.7 9.377 9.7h27.48c1.92 0 2.16.098 3.183 1.567l2.46 3.535");
}
</style><path class="pkyvqzbwn"/>`,
		"fallback": "arcticons:my-thairath",
	});
}

export default Component;
