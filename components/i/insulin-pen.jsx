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
		"content": `<style>.cl3waccsl {
  d: path("m17.64 8.83l1.42-1.41q.88-.89 0-1.77l-.71-.71q-.88-.88-1.77 0l-1.41 1.42q-.89.88-.01 1.76l.72.72q.88.88 1.76-.01");
}

.gakicm-oj {
  d: path("m3.5 20.5l2.12-2.12m2.65.89l8.14-8.14q.88-.88 0-1.76l-1.78-1.78q-.88-.88-1.76 0l-8.14 8.14q-.88.88 0 1.76l1.78 1.78q.88.88 1.76 0m3.01-6.55l2.12-2.12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gakicm-oj"/><path class="cl3waccsl"/></g>`,
		"fallback": "iconoven:insulin-pen",
	});
}

export default Component;
