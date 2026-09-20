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
		"content": `<style>.q1zixjb0c {
  fill: currentColor;
  d: path("M192 20H64a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H68V44h120ZM112 76a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 120a44 44 0 1 0-44-44a44.05 44.05 0 0 0 44 44m0-64a20 20 0 1 1-20 20a20 20 0 0 1 20-20");
}
</style><path class="q1zixjb0c"/>`,
		"fallback": "ph:speaker-hifi-bold",
	});
}

export default Component;
