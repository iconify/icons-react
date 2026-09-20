import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.axq-zljun {
  d: path("M232 64H24a8 8 0 0 0-8 8v104h224V72a8 8 0 0 0-8-8m-120 80H48V96h64Zm96 0h-64V96h64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.quuxg5b7u {
  d: path("M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16M24 72h208v96H24Zm88 80a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8Zm-56-48h48v32H56Zm88 48h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h48v32h-48Z");
}
</style><g class="cuyn6tgcc"><path class="axq-zljun"/><path class="quuxg5b7u"/></g>`,
		"fallback": "ph:memory-duotone",
	});
}

export default Component;
