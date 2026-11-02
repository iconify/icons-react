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

.vzmikccga {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.zsyfiqblh {
  d: path("M20.553 6.106A1 1 0 0 1 22 7v10a1 1 0 0 1-1.447.894l-6-3a1 1 0 1 1 .894-1.788L20 15.382V8.618l-4.553 2.276a1 1 0 1 1-.894-1.788ZM5.989 10.999c.134-.028.261-.107.375-.177a4.9 4.9 0 0 0 1.458-1.458c.07-.114.149-.241.177-.375L8 8.986a1 1 0 0 1 2 0l.001.003c.028.134.107.261.177.375a4.9 4.9 0 0 0 1.458 1.458c.114.07.241.149.375.177l.003.001a1 1 0 0 1 0 2l-.003.001c-.134.028-.261.107-.375.177a4.9 4.9 0 0 0-1.458 1.458c-.07.114-.149.241-.177.375l-.001.003a1 1 0 0 1-2 0l-.001-.003c-.028-.134-.107-.261-.177-.375a4.9 4.9 0 0 0-1.458-1.458c-.114-.07-.241-.149-.375-.177L5.986 13a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="vzmikccga"/><path class="zsyfiqblh"/></g>`,
		"fallback": "coolicons:video-sparkle-bulk-sharp",
	});
}

export default Component;
