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

.lyc90_alc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 5a3 3 0 1 1 6 0v7a3 3 0 1 1-6 0Z");
}

.uehovnqai {
  d: path("M14.989 4.999c.134-.028.261-.107.375-.177a4.9 4.9 0 0 0 1.458-1.458c.07-.114.149-.241.177-.375L17 2.986a1 1 0 0 1 2 0l.001.003c.028.134.107.261.177.375a4.9 4.9 0 0 0 1.458 1.458c.114.07.241.149.375.177l.003.001a1 1 0 0 1 0 2l-.003.001c-.134.028-.261.107-.375.177a4.9 4.9 0 0 0-1.458 1.458c-.07.114-.149.241-.177.375L19 9.014a1 1 0 0 1-2 0l-.001-.003c-.028-.134-.107-.261-.177-.375a4.9 4.9 0 0 0-1.458-1.458c-.114-.07-.241-.149-.375-.177L14.986 7a1 1 0 0 1 0-2ZM10 18.93V21a1 1 0 0 1-2 0v-2.07a7 7 0 0 1-3.95-1.98a6.9 6.9 0 0 1-1.499-2.225A6.9 6.9 0 0 1 2 12a1 1 0 0 1 2 0a5.001 5.001 0 1 0 10 0a1 1 0 0 1 2 0a6.9 6.9 0 0 1-.551 2.725a6.9 6.9 0 0 1-1.499 2.225A7 7 0 0 1 10 18.93");
}
</style><g class="cuyn6tgcc"><path class="lyc90_alc"/><path class="uehovnqai"/></g>`,
		"fallback": "coolicons:microphone-sparkle-bulk-round",
	});
}

export default Component;
