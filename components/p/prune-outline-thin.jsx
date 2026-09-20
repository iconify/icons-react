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
		"content": `<style>.ax4bccbjb {
  d: path("m20 7 -4 4");
}

.b1a3u6bfq {
  d: path("m16 7 4 4");
}

.hcq4p1b2v {
  d: path("M6 15h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpjdm200q {
  d: path("M6 4v16");
}

.ngnirel9c {
  d: path("M6 9h8");
}
</style><g class="hntgybcog"><path class="mpjdm200q"/><path class="ngnirel9c"/><path class="hcq4p1b2v"/><path class="b1a3u6bfq"/><path class="ax4bccbjb"/></g>`,
		"fallback": "iconmind:prune-outline-thin",
	});
}

export default Component;
