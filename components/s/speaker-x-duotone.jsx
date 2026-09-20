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

.d8rkm0b3g {
  d: path("M80 88v80H32a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m44m36b8m {
  d: path("M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64l-56-43.57V91.94l56-43.58Zm101.66-61.3a8 8 0 0 1-11.32 11.32L216 139.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L204.69 128l-18.35-18.34a8 8 0 0 1 11.32-11.32L216 116.69l18.34-18.35a8 8 0 0 1 11.32 11.32L227.31 128Z");
}
</style><g class="cuyn6tgcc"><path class="d8rkm0b3g"/><path class="m44m36b8m"/></g>`,
		"fallback": "ph:speaker-x-duotone",
	});
}

export default Component;
