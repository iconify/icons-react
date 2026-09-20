import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkxaj-3qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkxaj-3qw"/>`,
		"fallback": "mynaui:rocket",
	});
}

export default Component;
