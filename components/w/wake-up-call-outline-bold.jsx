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
		"content": `<style>.bh28pgoco {
  d: path("M12 13h4");
}

.fcb5akbfg {
  d: path("m5 5 3 3");
}

.fxnzc9b-v {
  d: path("M12 9v4");
}

.nqda50bqs {
  d: path("M4 13a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.txeai18yr {
  d: path("m19 5 -3 3");
}
</style><g class="s0phu2bbs"><path class="nqda50bqs"/><path class="fxnzc9b-v"/><path class="bh28pgoco"/><path class="fcb5akbfg"/><path class="txeai18yr"/></g>`,
		"fallback": "iconmind:wake-up-call-outline-bold",
	});
}

export default Component;
