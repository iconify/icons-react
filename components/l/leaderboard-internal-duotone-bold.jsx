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
		"content": `<style>.f3be8jb4e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fnd330-1e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 11v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g_xy_1ryr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 14v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g7go0l5ag {
  d: path("M5 11v8");
}

.j6riv-b4h {
  d: path("M19 14v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w0e70wbbt {
  d: path("M3 21.5h18");
}

.wew0vnk_n {
  d: path("M12 5v14");
}

.zv_796-4v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 21.5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="fnd330-1e"/><path class="f3be8jb4e"/><path class="g_xy_1ryr"/><path class="zv_796-4v"/><path class="g7go0l5ag"/><path class="wew0vnk_n"/><path class="j6riv-b4h"/><path class="w0e70wbbt"/></g>`,
		"fallback": "iconmind:leaderboard-internal-duotone-bold",
	});
}

export default Component;
