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
		"content": `<style>.lft0wcnkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v6.5m-3.75-5h7.5m-7.5 0L6.75 8v1.5h3V8Zm7.5 0L14.25 8v1.5h3V8Zm-13 9h2.5v7.75h-2.5zm2.5 1H8l3.5 1.5h3.25v2.5H10.5M5.25 21H14l6-3.25l1.006-.731l-1.25-2.15l-1.006.731l-3.25 1.15");
}
</style><path class="lft0wcnkw"/>`,
		"fallback": "iconoven:legal-aid-sharp",
	});
}

export default Component;
