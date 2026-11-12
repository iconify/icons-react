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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dqa_u8b9n {
  d: path("M12 13h9a1 1 0 0 1 0 2h-8v4a1 1 0 0 1-2 0v-4H3a1 1 0 0 1 0-2Z");
}

.m2dtcxzwn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="m2dtcxzwn"/><path class="dqa_u8b9n"/></g>`,
		"fallback": "coolicons:touchpad-bulk-sharp",
	});
}

export default Component;
