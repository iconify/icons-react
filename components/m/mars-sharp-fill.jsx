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
		"content": `<style>.a5xy4h2vl {
  d: path("M14.5 3L21 3L21 9.5M13.2426 10.7574L20.8243 3.1757");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ilarnua5f {
  fill: currentColor;
  d: path("M16 15C16 18.866 12.866 22 9 22C5.134 22 2 18.866 2 15C2 11.134 5.134 8 9 8C12.866 8 16 11.134 16 15Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="ilarnua5f"/><path class="a5xy4h2vl"/></g>`,
		"fallback": "keyline-icons:mars-sharp-fill",
	});
}

export default Component;
