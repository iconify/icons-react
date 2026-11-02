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
		"content": `<style>.zkup4acye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m21 7l-9 5l9 5Zm-9 0l-9 5l9 5Z");
}
</style><path class="zkup4acye"/>`,
		"fallback": "coolicons:rewind-duocolor-sharp",
	});
}

export default Component;
