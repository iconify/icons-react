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
		"content": `<style>.e3_kvuzgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 11C19 15.4184 15.4184 19 11 19C6.5816 19 3 15.4184 3 11C3 6.5816 6.5816 3 11 3C15.4184 3 19 6.5816 19 11ZM17 17L21 21");
}
</style><path class="e3_kvuzgm"/>`,
		"fallback": "keyline-icons:search-2",
	});
}

export default Component;
