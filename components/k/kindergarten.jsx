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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i46jfsbff {
  d: path("M3.75 13a2 2 0 0 1 .8-1.6l6.25-4.7a2 2 0 0 1 2.4 0l6.25 4.7a2 2 0 0 1 .8 1.6v6.25a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2Z");
}

.of_fbgbfa {
  d: path("M10.5 21.25v-3a1.5 1.5 0 0 1 3 0v3M7 15h1.5m7 0H17m-6.75-1.75h3.5m-3 0V12a1.25 1.25 0 0 1 2.5 0v1.25");
}

.yh-m50bvw {
  d: path("M12 6.3V2.75h3.25L14.5 4l.75 1.25H12");
}
</style><g class="hntgybcog"><path class="yh-m50bvw"/><path class="i46jfsbff"/><path class="of_fbgbfa"/></g>`,
		"fallback": "iconoven:kindergarten",
	});
}

export default Component;
