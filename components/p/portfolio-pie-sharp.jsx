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
		"content": `<style>.ukvmc8bfw {
  cx: 12px;
  cy: 14px;
  r: 4px;
}

.v563j7avx {
  d: path("M9 7V4h6v3M3 7h18v14H3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ziql97jnu {
  d: path("M12 10v4h4");
}
</style><g class="x2cwu0gfd"><path class="v563j7avx"/><circle class="ukvmc8bfw"/><path class="ziql97jnu"/></g>`,
		"fallback": "iconoven:portfolio-pie-sharp",
	});
}

export default Component;
