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
		"content": `<style>.rrexurzup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12.5c-1.75-1.5-2.25-4.75 0-9c2.25 4.25 1.75 7.5 0 9Zm-3 .75c-2.75 0-5.25-1.5-6.25-4c3.25 0 5.5 1.25 6.25 4Zm6 0c2.75 0 5.25-1.5 6.25-4c-3.25 0-5.5 1.25-6.25 4ZM6.5 16h11l-1.15 4.35l-.262.9H7.913l-.263-.9Z");
}
</style><path class="rrexurzup"/>`,
		"fallback": "iconoven:succulent-sharp",
	});
}

export default Component;
