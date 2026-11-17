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
		"content": `<style>.fi6lvhdjd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 12l9-9l3 3l-9 9H9Z");
}

.ft5dv1b6b {
  fill: none;
}

.qdktjxjhq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15v-3l9-9l3 3l-9 9zm6-9l3 3M3 21l3-3l3 3m4 0h8");
}
</style><g class="ft5dv1b6b"><path class="fi6lvhdjd"/><path class="qdktjxjhq"/></g>`,
		"fallback": "coolicons:text-edit-duotone-sharp",
	});
}

export default Component;
