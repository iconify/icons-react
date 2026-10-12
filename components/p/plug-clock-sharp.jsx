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
		"content": `<style>.f44rbjbxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8.25h10.5v3.5a5.25 5.25 0 0 1-10.5 0Zm2.5-5.5v5.5m5.5-5.5v5.5M12 17v4.25");
}
</style><path class="f44rbjbxc"/>`,
		"fallback": "iconoven:plug-clock-sharp",
	});
}

export default Component;
