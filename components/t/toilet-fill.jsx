import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.de1-3l0ph {
  fill: currentColor;
  d: path("M60 88h136a4 4 0 0 0 4-4V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v44a4 4 0 0 0 4 4m28-40h15.73a8.18 8.18 0 0 1 8.27 7.47a8 8 0 0 1-8 8.53H88.27A8.18 8.18 0 0 1 80 56.53A8 8 0 0 1 88 48m136 64.06a8 8 0 0 0-8-8.06H40a8 8 0 0 0-8 8.06a96.1 96.1 0 0 0 51.68 85.08l-3.47 24.27a16.43 16.43 0 0 0 1.63 10A16 16 0 0 0 96 240h63.66a16.52 16.52 0 0 0 9.72-3a16 16 0 0 0 6.46-15.23l-3.52-24.6A96.1 96.1 0 0 0 224 112.06M96 224l2.93-20.5a96.15 96.15 0 0 0 58.14 0L160 224Z");
}
</style><path class="de1-3l0ph"/>`,
		"fallback": "ph:toilet-fill",
	});
}

export default Component;
