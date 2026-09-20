import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":168};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bt5r7kbhc {
  fill: var(--svg-color--ff2638, #ff2638);
  d: path("m85.327 83.997l85.327 83.996H0z");
}

.h88e1kb4f {
  fill: var(--svg-color--0079f2, #0079f2);
  d: path("m85.341 83.997l85.327 83.996l85.327-83.996L170.668 0z");
}

.u1r6-_bmj {
  fill: var(--svg-color--ffc600, #ffc600);
  d: path("m0 0l85.327 83.997L170.654 0z");
}
</style><path class="bt5r7kbhc"/><path class="u1r6-_bmj"/><path class="h88e1kb4f"/>`,
		"fallback": "logos:productboard-icon",
	});
}

export default Component;
