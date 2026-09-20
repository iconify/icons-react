import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiygh8btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiygh8btl"/>`,
		"fallback": "thesvg-color:probot",
	});
}

export default Component;
