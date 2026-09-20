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
		"content": `<style>.kst16lb8k {
  d: path("M6 18.5V21");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s3lwy2n0b {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.uue3xmbwl {
  d: path("M15 5v14");
}

.wew0vnk_n {
  d: path("M12 5v14");
}

.yjd2gm3-w {
  d: path("M18 18.5V21");
}

.zto18nxmz {
  d: path("M9 5v14");
}
</style><g class="s0phu2bbs"><path class="s3lwy2n0b"/><path class="zto18nxmz"/><path class="wew0vnk_n"/><path class="uue3xmbwl"/><path class="kst16lb8k"/><path class="yjd2gm3-w"/></g>`,
		"fallback": "iconmind:radiator-outline-bold",
	});
}

export default Component;
