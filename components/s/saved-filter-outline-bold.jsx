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
		"content": `<style>.fyjgc24rp {
  d: path("m9 6 3 3 3 -3");
}

.icp673bbo {
  d: path("M12 9v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wv6md6qod {
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
}
</style><g class="s0phu2bbs"><path class="wv6md6qod"/><path class="fyjgc24rp"/><path class="icp673bbo"/></g>`,
		"fallback": "iconmind:saved-filter-outline-bold",
	});
}

export default Component;
