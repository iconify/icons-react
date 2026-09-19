import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjz-x1bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjz-x1bgl"/>`,
		"fallback": "gg:userlane",
	});
}

export default Component;
