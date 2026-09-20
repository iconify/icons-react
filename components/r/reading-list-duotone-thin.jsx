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
		"content": `<style>.h2ryw2b8h {
  d: path("M13 13h7");
}

.hgmedzbsm {
  d: path("M13 9h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.szeqx6bdv {
  d: path("M13 17h5");
}

.zjwn55blz {
  fill: currentColor;
  d: path("M4 6h6v10l-3 -3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zkld0ib7h {
  d: path("M4 6h6v10l-3 -3 -3 3Z");
}
</style><g class="hntgybcog"><path class="zjwn55blz"/><path class="zkld0ib7h"/><path class="hgmedzbsm"/><path class="h2ryw2b8h"/><path class="szeqx6bdv"/></g>`,
		"fallback": "iconmind:reading-list-duotone-thin",
	});
}

export default Component;
