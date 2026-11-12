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
		"content": `<style>.cdjydhbxj {
  stroke-linecap: round;
  d: path("M17 7.99991C14 8.99991 12 11.9999 12 11.9999M12 11.9999C12 11.9999 10 14.9999 7 15.9999M12 11.9999C12 11.9999 11 6.99991 9 7.99991M12 11.9999C12 11.9999 13 16.9999 15 15.9999");
}

.cf4g_3bbq {
  d: path("M12 22C7.286 22 4.9289 22 3.4645 20.5355C2 19.0711 2 16.714 2 12C2 7.286 2 4.9289 3.4645 3.4645C4.9289 2 7.286 2 12 2C16.714 2 19.0711 2 20.5355 3.4645C22 4.9289 22 7.286 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.jx0p4fbya {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="jx0p4fbya"><path class="cf4g_3bbq"/><path class="cdjydhbxj"/></g>`,
		"fallback": "solar:variable-square-line-duotone",
	});
}

export default Component;
