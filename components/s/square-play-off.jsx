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
		"content": `<style>.gqnmp29gh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21L6 21C4.3431 21 3 19.6569 3 18L3 6C3 5.2044 3.3161 4.4413 3.8787 3.8787M8.6569 3L18 3C19.6569 3 21 4.3431 21 6L21 15.3431M8.9717 8.9717C8.9657 9.0161 8.9627 9.0608 8.9627 9.1055L8.9627 14.8945C8.9627 15.4467 9.4104 15.8945 9.9627 15.8945C10.1502 15.8945 10.3338 15.8418 10.4927 15.7425L13.7233 13.7233M2 2L22 22");
}
</style><path class="gqnmp29gh"/>`,
		"fallback": "keyline-icons:square-play-off",
	});
}

export default Component;
