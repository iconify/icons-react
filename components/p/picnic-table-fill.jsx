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
		"content": `<style>.rhkbfzb2r {
  fill: currentColor;
  d: path("m146.85 96l14.54 32H94.61l14.54-32ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-24 80a8 8 0 0 0-8-8h-21l-14.58-32H176a8 8 0 0 0 0-16H80a8 8 0 0 0 0 16h11.58L77 128H56a8 8 0 0 0 0 16h13.76l-13 28.69a8 8 0 1 0 14.56 6.62l16-35.31h81.34l16.05 35.31a8 8 0 0 0 14.56-6.62l-13-28.69H200a8 8 0 0 0 8-8");
}
</style><path class="rhkbfzb2r"/>`,
		"fallback": "ph:picnic-table-fill",
	});
}

export default Component;
