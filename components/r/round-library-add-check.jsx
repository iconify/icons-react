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
		"content": `<style>.erdlr4bhc {
  fill: currentColor;
  d: path("M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4a.996.996 0 0 1 1.41 0l1.36 1.37l4.42-4.46a.996.996 0 0 1 1.41 0c.38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1");
}
</style><path class="erdlr4bhc"/>`,
		"fallback": "ic:round-library-add-check",
	});
}

export default Component;
