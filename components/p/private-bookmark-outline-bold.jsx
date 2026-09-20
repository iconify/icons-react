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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v60hotbkj {
  d: path("M10.5 8.5a1.5 1.5 0 0 1 3 0");
}

.wv6md6qod {
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
}

.ywmylfbpm {
  d: path("M9 8.5h6v3H9Z");
}
</style><g class="s0phu2bbs"><path class="wv6md6qod"/><path class="ywmylfbpm"/><path class="v60hotbkj"/></g>`,
		"fallback": "iconmind:private-bookmark-outline-bold",
	});
}

export default Component;
