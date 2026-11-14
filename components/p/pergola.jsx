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
		"content": `<style>.fey2zhfqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19m-16 0v14m13-14v14M3.5 3v4.5M7.75 3v4.5M12 3v4.5M16.25 3v4.5M20.5 3v4.5");
}
</style><path class="fey2zhfqe"/>`,
		"fallback": "uix-sharp:pergola",
	});
}

export default Component;
