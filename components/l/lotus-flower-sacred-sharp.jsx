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
		"content": `<style>.eb5gbubne {
  d: path("M12 7q2.6-2.1 0-4.25Q9.4 4.9 12 7Zm3.54 1.46q3.32.36 3-3q-3.36-.32-3 3ZM17 12q2.1 2.6 4.25 0Q19.1 9.4 17 12Zm-1.46 3.54q-.36 3.32 3 3q.32-3.36-3-3ZM12 17q-2.6 2.1 0 4.25q2.6-2.15 0-4.25Zm-3.54-1.46q-3.32-.36-3 3q3.36.32 3-3ZM7 12q-2.1-2.6-4.25 0Q4.9 14.6 7 12Zm1.46-3.54q.36-3.32-3-3q-.32 3.36 3 3Z");
}

.h_tsn8bxt {
  cx: 12px;
  cy: 12px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="eb5gbubne"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "iconoven:lotus-flower-sacred-sharp",
	});
}

export default Component;
