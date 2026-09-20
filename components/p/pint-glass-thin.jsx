import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iyetuqb1s {
  fill: currentColor;
  d: path("M203 29.35a4 4 0 0 0-3-1.35H56a4 4 0 0 0-4 4.48l23.15 193A12 12 0 0 0 87.1 236h81.8a12 12 0 0 0 11.92-10.57L204 32.48a4 4 0 0 0-1-3.13M195.49 36l-3.84 32H64.35l-3.84-32Zm-22.62 188.48a4 4 0 0 1-4 3.52H87.1a4 4 0 0 1-4-3.52L65.31 76h125.38Z");
}
</style><path class="iyetuqb1s"/>`,
		"fallback": "ph:pint-glass-thin",
	});
}

export default Component;
