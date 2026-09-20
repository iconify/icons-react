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
		"content": `<style>.gz0v-hb-h {
  d: path("M12 8Q9 5 3 5v12q6 0 9 3");
}

.ign1webml {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8q3 -3 9 -3v12q-6 0 -9 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jj6_bkkjq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8Q9 5 3 5v12q6 0 9 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l4mvwmb8t {
  d: path("m15 17 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wioyn1brg {
  d: path("M12 8q3 -3 9 -3v12q-6 0 -9 3");
}

.xem_0iqkn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 17 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="jj6_bkkjq"/><path class="ign1webml"/><path class="xem_0iqkn"/><path class="gz0v-hb-h"/><path class="wioyn1brg"/><path class="l4mvwmb8t"/></g>`,
		"fallback": "iconmind:open-book-duotone-bold",
	});
}

export default Component;
