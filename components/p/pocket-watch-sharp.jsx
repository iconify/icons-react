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
		"content": `<style>.ht_zk-bpr {
  cx: 12px;
  cy: 14.75px;
  r: 6.5px;
}

.pbatvs_xm {
  d: path("M12 6.25v1.5m1.75-3.25h3.929l1.571 2.75M12 14.75V11.5m0 3.25l2.25 1.5");
}

.t88z8mbby {
  cx: 12px;
  cy: 4.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ht_zk-bpr"/><circle class="t88z8mbby"/><path class="pbatvs_xm"/></g>`,
		"fallback": "iconoven:pocket-watch-sharp",
	});
}

export default Component;
