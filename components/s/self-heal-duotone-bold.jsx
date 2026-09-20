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
		"content": `<style>.hpthd_boc {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.jsscmvi7f {
  d: path("M11 4.5 8.5 7l3 3");
}

.nhdf6_bjv {
  fill: currentColor;
  d: path("M12.5 13a2 2 0 0 1 2 -2H17a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r1tpzrwqw {
  fill: currentColor;
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ysq-u10yt {
  d: path("M12.5 13a2 2 0 0 1 2 -2H17a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2");
}
</style><g class="s0phu2bbs"><path class="r1tpzrwqw"/><path class="nhdf6_bjv"/><path class="hpthd_boc"/><path class="jsscmvi7f"/><path class="ysq-u10yt"/></g>`,
		"fallback": "iconmind:self-heal-duotone-bold",
	});
}

export default Component;
