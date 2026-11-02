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
		"content": `<style>.zyq2kbz9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 4L3 6v5h3v9h12v-9h3V6l-6-2m0 0a3 3 0 0 1-6 0");
}
</style><path class="zyq2kbz9l"/>`,
		"fallback": "coolicons:shirt-sharp",
	});
}

export default Component;
