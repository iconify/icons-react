import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck_h6_bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck_h6_bti"/>`,
		"fallback": "tdesign:task-checked",
	});
}

export default Component;
