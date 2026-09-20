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
		"content": `<style>.iup9trbmr {
  d: path("M12 6v4");
}

.jroakeb3a {
  d: path("M17 4h4v16h-4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.to02llleg {
  d: path("M7 4H3v16h4");
}

.u7m7z6ojw {
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="to02llleg"/><path class="jroakeb3a"/><path class="iup9trbmr"/><path class="u7m7z6ojw"/></g>`,
		"fallback": "iconmind:savepoint-outline-bold",
	});
}

export default Component;
