import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yws5cp5zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yws5cp5zy"/>`,
		"fallback": "heroicons-outline:logout",
	});
}

export default Component;
