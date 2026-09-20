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
		"content": `<style>.c9206qb8k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 17 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gpvmo9bml {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8Q9 5 3 5v12q6 0 9 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gz0v-hb-h {
  d: path("M12 8Q9 5 3 5v12q6 0 9 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jfxt66jwj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8q3 -3 9 -3v12q-6 0 -9 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l4mvwmb8t {
  d: path("m15 17 2 2 4 -4");
}

.wioyn1brg {
  d: path("M12 8q3 -3 9 -3v12q-6 0 -9 3");
}
</style><g class="hntgybcog"><path class="gpvmo9bml"/><path class="jfxt66jwj"/><path class="c9206qb8k"/><path class="gz0v-hb-h"/><path class="wioyn1brg"/><path class="l4mvwmb8t"/></g>`,
		"fallback": "iconmind:open-book-duotone-thin",
	});
}

export default Component;
