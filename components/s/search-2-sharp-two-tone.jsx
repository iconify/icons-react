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

.knubpbc0y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 11C20 15.8326 15.8326 20 11 20C6.1674 20 2 15.8326 2 11C2 6.1674 6.1674 2 11 2C15.8326 2 20 6.1674 20 11Z");
  stroke: none;
}

.n9lqcmdyn {
  d: path("M19 11C19 15.4184 15.4184 19 11 19C6.5816 19 3 15.4184 3 11C3 6.5816 6.5816 3 11 3C15.4184 3 19 6.5816 19 11ZM16.6569 16.6569L21.2929 21.2929");
}
</style><g class="gp_8x1bzb"><path class="knubpbc0y"/><path class="n9lqcmdyn"/></g>`,
		"fallback": "keyline-icons:search-2-sharp-two-tone",
	});
}

export default Component;
