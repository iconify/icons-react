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
		"content": `<style>.n-_nxdr2e {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.5 2L19.5 2C19.7761 2 20 2.2239 20 2.5L20 9.5C20 9.7761 19.7761 10 19.5 10L4.5 10C4.2239 10 4 9.7761 4 9.5L4 2.5C4 2.2239 4.2239 2 4.5 2ZM4.5 14L19.5 14C19.7761 14 20 14.2239 20 14.5L20 21.5C20 21.7761 19.7761 22 19.5 22L4.5 22C4.2239 22 4 21.7761 4 21.5L4 14.5C4 14.2239 4.2239 14 4.5 14ZM12 2L12 10M12 14L12 22");
}
</style><path class="n-_nxdr2e"/>`,
		"fallback": "keyline-icons:toggles-sharp",
	});
}

export default Component;
