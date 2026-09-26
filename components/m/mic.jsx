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
		"content": `<style>.cugntf3hv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 5C9 3.343146 10.343146 2 12 2L12 2C13.656854 2 15 3.343146 15 5L15 11C15 12.656854 13.656854 14 12 14L12 14C10.343146 14 9 12.656854 9 11ZM19 11C19 14.865993 15.865993 18 12 18C8.134007 18 5 14.865993 5 11M12 18V22M8 22H16");
}
</style><path class="cugntf3hv"/>`,
		"fallback": "keyline-icons:mic",
	});
}

export default Component;
