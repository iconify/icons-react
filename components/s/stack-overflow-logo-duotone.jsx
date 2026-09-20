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

.rj-p1fbma {
  d: path("M208 152v64H48v-64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sfe550oar {
  d: path("M216 152.09V216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-63.91a8 8 0 0 1 16 0V208h144v-55.91a8 8 0 0 1 16 0m-128 32h80a8 8 0 1 0 0-16H88a8 8 0 1 0 0 16m4.88-53l77.27 20.68a8 8 0 0 0 2.08.28a8 8 0 0 0 2.07-15.71L97 115.61A8 8 0 1 0 92.88 131Zm18.45-49.93l69.28 40a8 8 0 0 0 10.93-2.93a8 8 0 0 0-2.93-10.91l-69.28-40.05a8 8 0 1 0-8 13.84Zm87.33 13A8 8 0 1 0 210 82.84l-56.57-56.5a8 8 0 0 0-11.32 11.3Z");
}
</style><g class="cuyn6tgcc"><path class="rj-p1fbma"/><path class="sfe550oar"/></g>`,
		"fallback": "ph:stack-overflow-logo-duotone",
	});
}

export default Component;
