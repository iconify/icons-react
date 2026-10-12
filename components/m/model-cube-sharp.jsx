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
		"content": `<style>.hkdq4jb_w {
  d: path("m13.1 3.35l6.05 3.3l1.1.6v9.5l-1.1.6l-6.05 3.3l-1.1.6l-1.1-.6l-6.05-3.3l-1.1-.6v-9.5l1.1-.6l6.05-3.3l1.1-.6z");
}

.ku9hkac5i {
  d: path("m3.75 7.25l8.25 4.5l8.25-4.5M12 11.75v9.5M7.9 12.7l.29 2.11l2.11.29l-2.11.29l-.29 2.11l-.29-2.11l-2.11-.29l2.11-.29z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hkdq4jb_w"/><path class="ku9hkac5i"/></g>`,
		"fallback": "iconoven:model-cube-sharp",
	});
}

export default Component;
