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

.yui0mcs2l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 1C12.165 1 12.461 1.04 12.623 1.06L12.873 1.13L13.217 1.25L21.57 6.74C22.437 7.15 23 8.03 23 9V22C23 22.55 22.552 23 22 23H2C1.448 23 1 22.55 1 22V9C1 8.03 1.568 7.15 2.434 6.74L10.75 1.27C11.096 1.13 11.629 1 12 1Z");
}

.zjxfrpbkm {
  d: path("M17 19V21H7V19H17ZM17 15V17H7V15H17ZM17 11V13H7V11H17Z");
}
</style><g class="cuyn6tgcc"><path class="yui0mcs2l"/><path class="zjxfrpbkm"/></g>`,
		"fallback": "keyline-icons:warehouse-sharp-duotone",
	});
}

export default Component;
