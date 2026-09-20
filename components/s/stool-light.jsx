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
		"content": `<style>.ndoj1_qwv {
  fill: currentColor;
  d: path("M198 64V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h9L58.07 223.06a6 6 0 0 0 5 6.87a6 6 0 0 0 6.86-5L78 174h100l8 50.93a6 6 0 1 0 11.86-1.87L175 78h9a14 14 0 0 0 14-14M70 64V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2m106.14 98H79.86l13.27-84h69.74Z");
}
</style><path class="ndoj1_qwv"/>`,
		"fallback": "ph:stool-light",
	});
}

export default Component;
