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
		"content": `<style>.udnbbdbni {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v18M4 8h16m-3.5-3.5L20 8l-3.5 3.5M20 16H4m3.5-3.5L4 16l3.5 3.5");
}
</style><path class="udnbbdbni"/>`,
		"fallback": "uix-sharp:switch-sides",
	});
}

export default Component;
