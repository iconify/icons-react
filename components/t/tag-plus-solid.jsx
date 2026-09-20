import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls8nwe1ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls8nwe1ya"/>`,
		"fallback": "mynaui:tag-plus-solid",
	});
}

export default Component;
