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
		"content": `<style>.knwgaebnp {
  d: path("M12.5 8.5V11H15");
}

.o2gvs3b4v {
  d: path("m10.5 6l-2.75-.75l.75-2.75m.5 6h3.5L15 11v5.5H9Z");
}

.r8xjto_7p {
  d: path("M3.75 10.25a8.5 8.5 0 1 0 4-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r8xjto_7p"/><path class="o2gvs3b4v"/><path class="knwgaebnp"/></g>`,
		"fallback": "uix-sharp:rx-history",
	});
}

export default Component;
