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
		"content": `<style>.wqhtc1mzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.31 14.033l9.723-9.723a2.625 2.625 0 0 1 3.712 0l1.945 1.945a2.625 2.625 0 0 1 0 3.712L9.967 19.69a2.625 2.625 0 0 1-3.712 0L4.31 17.745a2.625 2.625 0 0 1 0-3.712m.972-.972l2.122 2.121m.353-4.596l3.182 3.182m-.707-5.657l2.122 2.121m.353-4.596l3.182 3.182");
}
</style><path class="wqhtc1mzg"/>`,
		"fallback": "uix:ruler",
	});
}

export default Component;
