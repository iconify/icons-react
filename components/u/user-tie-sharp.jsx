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
		"content": `<style>.i2q79lhiz {
  cx: 12px;
  cy: 6.75px;
  r: 3.5px;
}

.v2-6bv3ar {
  d: path("m12.21 15.09l.98 1.57l.21.34l-.23.33l-.94 1.34L12 19l-.23-.33l-.94-1.34l-.23-.33l.21-.34l.98-1.57l.21-.34z");
}

.wa32eyybe {
  d: path("M5.25 20.25H19.5v-.75c0-3.6-3.38-6.5-7.5-6.5s-7.5 2.9-7.5 6.5v.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="i2q79lhiz"/><path class="wa32eyybe"/><path class="v2-6bv3ar"/></g>`,
		"fallback": "iconoven:user-tie-sharp",
	});
}

export default Component;
