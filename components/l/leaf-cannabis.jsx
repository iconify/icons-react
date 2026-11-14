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
		"content": `<style>.j_o3-u66w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5L10.25 9L12 2.5L13.75 9Zm0 0l3.058-4.524l4.985-2.225l-3.057 4.523Zm0 0l-4.986-2.226l-3.057-4.523l4.985 2.225Zm0 0l3.418-.667l2.983 1.796l-3.417.666Zm0 0l-2.984 1.795l-3.417-.666l2.983-1.796Zm0 0v6");
}
</style><path class="j_o3-u66w"/>`,
		"fallback": "uix-sharp:leaf-cannabis",
	});
}

export default Component;
