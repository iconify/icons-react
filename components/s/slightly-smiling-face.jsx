import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hg8187bsc {
  cx: 12px;
  cy: 13.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}

.kg6i7dp2x {
  fill: var(--svg-color--664500, #664500);
  d: path("M10.515 23.621C10.56 23.8 11.683 28 18 28s7.44-4.2 7.485-4.379a.5.5 0 0 0-.237-.554a.505.505 0 0 0-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855a.5.5 0 0 0-.598-.081a.5.5 0 0 0-.239.557");
}

.q-4sqnh6r {
  cx: 24px;
  cy: 13.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}

.q1m2erv2p {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--ffcc4d, #ffcc4d);
}
</style><circle class="q1m2erv2p"/><path class="kg6i7dp2x"/><ellipse class="hg8187bsc"/><ellipse class="q-4sqnh6r"/>`,
		"fallback": "twemoji:slightly-smiling-face",
	});
}

export default Component;
