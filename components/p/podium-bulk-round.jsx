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

.d_8oape8w {
  d: path("M12.293 8.293A1 1 0 0 1 14 9v6a1 1 0 0 1-2 0v-3.586l-.293.293a.999.999 0 1 1-1.414-1.414ZM9 12v9a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0m8 3v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0");
}

.tv09jwjac {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 11V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v7h2a3 3 0 0 1 3 3v1a4 4 0 0 1-4 4H7a5 5 0 0 1-5-5v-3a3 3 0 0 1 3-3Z");
}
</style><g class="cuyn6tgcc"><path class="tv09jwjac"/><path class="d_8oape8w"/></g>`,
		"fallback": "coolicons:podium-bulk-round",
	});
}

export default Component;
