import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c6oogw4io {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.678 19.207L4.5 14.94h5.689l4.355 4.267zm9.599 9.423v-5.512l4.445 4.267v5.333zm-4.621-13.69l9.066 9.156v-4.622h12c3.732 0 4.911 4.208 3.436 6.729c-1.476 2.52-8.13 3.395-8.13-2.018H25.21c0 10.782 12.462 10.641 16.32 5.403s2.084-14.558-5.653-14.558z");
}
</style><path class="c6oogw4io"/>`,
		"fallback": "arcticons:teampulse",
	});
}

export default Component;
