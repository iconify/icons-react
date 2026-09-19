import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjy8cko8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjy8cko8d"/>`,
		"fallback": "eva:phone-off-fill",
	});
}

export default Component;
