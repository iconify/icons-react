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
		"content": `<style>.m-s8rx_ul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 4H19C20.65685 4 22 5.34315 22 7V17C22 18.65685 20.65685 20 19 20H5C3.34315 20 2 18.65685 2 17V7C2 5.34315 3.34315 4 5 4ZM6 10H8M12 10H18M6 14H12M16 14H18");
}
</style><path class="m-s8rx_ul"/>`,
		"fallback": "keyline-icons:subtitles",
	});
}

export default Component;
