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
		"content": `<style>.eptgjlb3e {
  d: path("M16.25 6.5v-3h2.5v5m-.75 13c-1.75 0-3-1.25-3-3s1.75-2.5 2-4.25C18 15 18.5 16 18.5 17q.75-.75.75-1.5c1.25 1 1.75 2 1.75 3c0 1.75-1.25 3-3 3Z");
}

.ozif9d10d {
  d: path("M12.951 21.5H5.5q-.098 0-.196-.01q-.098-.009-.194-.028q-.097-.02-.191-.048q-.094-.029-.184-.066q-.091-.038-.178-.084q-.086-.046-.168-.101t-.158-.117t-.145-.132q-.07-.069-.132-.145t-.117-.158t-.101-.168t-.084-.178q-.037-.09-.066-.184q-.028-.094-.048-.191q-.019-.096-.028-.194T3.5 19.5V10L12 3l8.5 7v2.977");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ozif9d10d"/><path class="eptgjlb3e"/></g>`,
		"fallback": "uix-sharp:warm-space",
	});
}

export default Component;
