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

.o3qbccc3l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 21v-9a1 1 0 0 1 1-1h4V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v9h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="o3qbccc3l"/><path class="d_8oape8w"/></g>`,
		"fallback": "coolicons:podium-bulk-sharp",
	});
}

export default Component;
