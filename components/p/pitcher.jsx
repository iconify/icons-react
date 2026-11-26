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
		"content": `<style>.y-7u9mbro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.0016 4H16.8672C17.4687 4 17.9341 4.5272 17.8595 5.124L16.219 18.2481C16.0939 19.2489 15.2431 20 14.2344 20H9.7656C8.7569 20 7.9061 19.2489 7.781 18.2481L6.5643 8.5143C6.524 8.1918 6.3295 7.909 6.0427 7.756L2.5309 5.8823C1.6125 5.3923 1.9606 4 3.0016 4ZM17.5 8H18C20.2091 8 22 9.7909 22 12C22 14.2091 20.2091 16 18 16H16.5M7 12H17");
}
</style><path class="y-7u9mbro"/>`,
		"fallback": "keyline-icons:pitcher",
	});
}

export default Component;
