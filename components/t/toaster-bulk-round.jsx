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

.djfohilqu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 11a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.vo-nfl9jh {
  d: path("M8 2c1.657.001 3 1.343 2.999 3v4a1 1 0 0 1-2 0V4.998a1 1 0 0 0-.317-.728a.96.96 0 0 0-.731-.269h-.003A.984.984 0 0 0 7 5v4a1 1 0 0 1-2 0V4.999A3 3 0 0 1 8 2m11 3v4a1 1 0 0 1-2 0V5a1 1 0 0 0-2 0v4a1 1 0 0 1-2 0V4.999A3 3 0 0 1 19 5m-1 12a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="djfohilqu"/><path class="vo-nfl9jh"/></g>`,
		"fallback": "coolicons:toaster-bulk-round",
	});
}

export default Component;
