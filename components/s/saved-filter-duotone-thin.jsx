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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icp673bbo {
  d: path("M12 9v3");
}

.wv6md6qod {
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
}

.xdwo9hb6a {
  fill: currentColor;
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xdwo9hb6a"/><path class="wv6md6qod"/><path class="fyjgc24rp"/><path class="icp673bbo"/></g>`,
		"fallback": "iconmind:saved-filter-duotone-thin",
	});
}

export default Component;
