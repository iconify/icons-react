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
		"content": `<style>.aw5jbub9q {
  d: path("M4.5 6h15a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8a2 2 0 0 1 2-2m12 0v2m0 2.75v2.5m0 2.75v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbch5f93j {
  d: path("m9.772 10.363l.584.351a1.5 1.5 0 0 1 0 2.572l-.584.351A1.5 1.5 0 0 1 7.5 12.351v-.702a1.5 1.5 0 0 1 2.272-1.286");
}
</style><g class="hntgybcog"><path class="aw5jbub9q"/><path class="wbch5f93j"/></g>`,
		"fallback": "uix:movie-ticket",
	});
}

export default Component;
