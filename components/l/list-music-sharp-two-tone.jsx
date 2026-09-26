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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jiipjmbmb {
  d: path("M22 15C22 16.6569 20.6569 18 19 18C17.3431 18 16 16.6569 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15ZM1 6L17 6M1 12L11 12M1 18L11 18M22 15L22 5");
}

.v8bkmxbml {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 15C23 17.0711 21.0711 19 19 19C16.9289 19 15 17.0711 15 15C15 12.9289 16.9289 11 19 11C21.0711 11 23 12.9289 23 15Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="v8bkmxbml"/><path class="jiipjmbmb"/></g>`,
		"fallback": "keyline-icons:list-music-sharp-two-tone",
	});
}

export default Component;
