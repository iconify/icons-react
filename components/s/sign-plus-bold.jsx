import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc203_r0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc203_r0p"/>`,
		"fallback": "iconamoon:sign-plus-bold",
	});
}

export default Component;
