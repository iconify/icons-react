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
		"content": `<style>.hs6536btr {
  fill: currentColor;
  d: path("M6 5h12v10H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kw0-p1bjo {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zm-9 0H6v-2h5zm7 0h-5v-2h5zm0-4H6V5h12z");
}
</style><path class="hs6536btr"/><path class="kw0-p1bjo"/>`,
		"fallback": "ic:twotone-roller-shades-closed",
	});
}

export default Component;
