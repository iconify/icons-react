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
		"content": `<style>.tlkzz9bje {
  d: path("M6.25 11.75h13l-.23 1.48l-1.04 6.54l-.23 1.48H6.25l-.23-1.48l-1.04-6.54l-.23-1.48z");
}

.wijmr5spd {
  cx: 12px;
  cy: 5.75px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yt0k09bcz {
  d: path("m16.75 11.75l1.5-3.5m-8 8h3.5");
}
</style><g class="x2cwu0gfd"><path class="tlkzz9bje"/><circle class="wijmr5spd"/><path class="yt0k09bcz"/></g>`,
		"fallback": "iconoven:lecture-sharp",
	});
}

export default Component;
