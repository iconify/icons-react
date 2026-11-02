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
		"content": `<style>.tt5z-ac7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 6l-3-3l-3 3m3-3v9m-3 6l3 3l3-3m-3 3v-9M6 9l-3 3l3 3m-3-3h9m6 3l3-3l-3-3m3 3h-9");
}
</style><path class="tt5z-ac7v"/>`,
		"fallback": "coolicons:move-duotone-sharp",
	});
}

export default Component;
