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
		"content": `<style>.re112eb5k {
  d: path("M15.706 9.882L12 16.5L8.294 9.882zm3.176-2.118H5.118L12 19.941zM3 4.06l1.324 2.117h15.353L21 4.06z");
}
</style><path class="re112eb5k"/>`,
		"fallback": "token-branded:vlx",
	});
}

export default Component;
