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
		"content": `<style>.tqzx_wbzv {
  fill: currentColor;
  d: path("M200 36h-40a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4ZM96 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z");
}
</style><path class="tqzx_wbzv"/>`,
		"fallback": "ph:pause-thin",
	});
}

export default Component;
