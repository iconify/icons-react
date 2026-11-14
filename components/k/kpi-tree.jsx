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
		"content": `<style>.s3u9a76lc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11V9h-11ZM2.5 15h8v6h-8Zm11 0h8v6h-8Zm-4-9.25h5M12 9v3m-5.5 3v-3h11v3");
}
</style><path class="s3u9a76lc"/>`,
		"fallback": "uix-sharp:kpi-tree",
	});
}

export default Component;
