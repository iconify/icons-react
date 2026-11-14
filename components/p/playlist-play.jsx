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
		"content": `<style>.rt2w-ultg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.772 5.363l.584.351a1.5 1.5 0 0 1 0 2.572l-.584.351A1.5 1.5 0 0 1 3.5 7.351v-.702a1.5 1.5 0 0 1 2.272-1.286M12 7h8.5m-17 6h17m-17 5.5H14");
}
</style><path class="rt2w-ultg"/>`,
		"fallback": "uix:playlist-play",
	});
}

export default Component;
