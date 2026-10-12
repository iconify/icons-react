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
		"content": `<style>.ui3ei481s {
  d: path("M3.75 4.75v15.5h17l-1.06-1.06L4.81 4.31L3.75 3.25z");
}

.utxbj9bmu {
  d: path("M7.25 12.5v4.25h5l-.53-.53l-3.94-3.94l-.53-.53z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ui3ei481s"/><path class="utxbj9bmu"/></g>`,
		"fallback": "iconoven:set-square-sharp",
	});
}

export default Component;
