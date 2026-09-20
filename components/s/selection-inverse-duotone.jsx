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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.e32g1qb7t {
  d: path("M216 48v160a8 8 0 0 1-2.34 5.66L42.34 42.34A8 8 0 0 1 48 40h160a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o-k8t3biu {
  d: path("M152 216a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M224 48v160a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h12.69L48 59.31V72a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H59.31L208 196.69Z");
}
</style><g class="cuyn6tgcc"><path class="e32g1qb7t"/><path class="o-k8t3biu"/></g>`,
		"fallback": "ph:selection-inverse-duotone",
	});
}

export default Component;
