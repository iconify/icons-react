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

.nps1jb41a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.5 6.5C13.5 7.3284 12.828 8 12 8C11.172 8 10.5 7.3284 10.5 6.5C10.5 5.6716 11.172 5 12 5C12.828 5 13.5 5.6716 13.5 6.5Z");
  stroke: none;
}

.zi31kky6j {
  d: path("M5 11H19M12 16V22H6M5 2H19V16H5V2Z");
}
</style><g class="gp_8x1bzb"><path class="zi31kky6j"/><path clip-rule="evenodd" class="nps1jb41a"/></g>`,
		"fallback": "keyline-icons:iv-bag-sharp",
	});
}

export default Component;
