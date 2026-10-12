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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuu2xjbdm {
  d: path("m17.72 15.3l1.73 1M12 18.6v2m-5.72-5.3l-1.73 1m1.73-7.6l-1.73-1M12 5.4v-2m5.72 5.3l1.73-1");
}

.zufhtjckp {
  cx: 12px;
  cy: 12px;
  r: 3.75px;
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="yuu2xjbdm"/><circle class="zufhtjckp"/></g>`,
		"fallback": "iconoven:poker-chip-sharp",
	});
}

export default Component;
