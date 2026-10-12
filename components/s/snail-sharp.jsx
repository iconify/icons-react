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
		"content": `<style>.rxrhb0bxg {
  d: path("M12 12.25A2.25 2.25 0 1 1 9.75 10m8.75.56l-1-4.06m3 4.06l.75-3.81");
}

.tptmcdcst {
  d: path("M2.75 20.5h18.5V10.25h-3.5v7.25h-15V19Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zs9gv_blq {
  cx: 9.75px;
  cy: 12.25px;
  r: 5.25px;
}
</style><g class="x2cwu0gfd"><path class="tptmcdcst"/><circle class="zs9gv_blq"/><path class="rxrhb0bxg"/></g>`,
		"fallback": "iconoven:snail-sharp",
	});
}

export default Component;
