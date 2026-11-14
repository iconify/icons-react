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
		"content": `<style>.j46bxjbmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19M3.5 15h3.75v6H3.5Zm6.5-3.5h3.75V21H10ZM16.5 8h3.75v13H16.5Z");
}
</style><path class="j46bxjbmw"/>`,
		"fallback": "uix-sharp:pipeline-coverage",
	});
}

export default Component;
