import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm1g7_pyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm1g7_pyc"/>`,
		"fallback": "iconaut:orbit-solid",
	});
}

export default Component;
