import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ts8qfh7hj {
  fill: currentColor;
  d: path("M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m9-7a1 1 0 1 0 0 2h8.01c-.383.562-.83 1.259-1.3 2.077c-1.345 2.34-2.894 5.694-3.691 9.73a1 1 0 0 0 1.962.387c.743-3.765 2.194-6.912 3.464-9.12a29 29 0 0 1 1.643-2.552a19 19 0 0 1 .632-.825l.032-.038l.007-.008A1 1 0 0 0 21 9z");
}
</style><path class="ts8qfh7hj"/>`,
		"fallback": "fluent:number-circle-7-32-filled",
	});
}

export default Component;
