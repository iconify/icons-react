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
		"content": `<style>.c8tpvpbrt {
  d: path("M7 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.igggo2bgi {
  d: path("M15 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oe-98mb0w {
  d: path("M12 6v12");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="oe-98mb0w"/><path class="c8tpvpbrt"/><path class="igggo2bgi"/></g>`,
		"fallback": "iconmind:slice-analysis-outline-bold",
	});
}

export default Component;
