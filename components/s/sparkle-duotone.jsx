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

.ij10vcquj {
  d: path("m194.82 151.43l-55.09 20.3l-20.3 55.09a7.92 7.92 0 0 1-14.86 0l-20.3-55.09l-55.09-20.3a7.92 7.92 0 0 1 0-14.86l55.09-20.3l20.3-55.09a7.92 7.92 0 0 1 14.86 0l20.3 55.09l55.09 20.3a7.92 7.92 0 0 1 0 14.86");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l6f85rb9o {
  d: path("M197.58 129.06L146 110l-19-51.62a15.92 15.92 0 0 0-29.88 0L78 110l-51.62 19a15.92 15.92 0 0 0 0 29.88L78 178l19 51.62a15.92 15.92 0 0 0 29.88 0L146 178l51.62-19a15.92 15.92 0 0 0 0-29.88ZM137 164.22a8 8 0 0 0-4.74 4.74L112 223.85L91.78 169a8 8 0 0 0-4.78-4.78L32.15 144L87 123.78a8 8 0 0 0 4.78-4.78L112 64.15L132.22 119a8 8 0 0 0 4.74 4.74L191.85 144ZM144 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8m104 48a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="ij10vcquj"/><path class="l6f85rb9o"/></g>`,
		"fallback": "ph:sparkle-duotone",
	});
}

export default Component;
