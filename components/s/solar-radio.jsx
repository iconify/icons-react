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
		"content": `<style>.mki9_bcnq {
  d: path("M3 10h18v11H3Zm2.5 0l-2-6.5m7 2.5h9v4h-9ZM15 6v4");
}

.nm3gx0b9y {
  d: path("M12.75 15.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6 15.5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mki9_bcnq"/><path class="nm3gx0b9y"/></g>`,
		"fallback": "uix-sharp:solar-radio",
	});
}

export default Component;
