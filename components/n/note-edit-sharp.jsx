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
		"content": `<style>.jngwayb-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4H4v16h16v-7M9 15v-3l9-9l3 3l-9 9Zm6-9l3 3");
}
</style><path class="jngwayb-j"/>`,
		"fallback": "coolicons:note-edit-sharp",
	});
}

export default Component;
