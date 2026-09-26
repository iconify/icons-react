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
		"content": `<style>.kikvugbsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 11C19 15.4183 15.4183 19 11 19C6.5817 19 3 15.4183 3 11C3 6.5817 6.5817 3 11 3C15.4183 3 19 6.5817 19 11ZM17 17L21 21M8 11L14 11");
}
</style><path class="kikvugbsp"/>`,
		"fallback": "keyline-icons:search-2-minus",
	});
}

export default Component;
