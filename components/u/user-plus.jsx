import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqaz2vbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqaz2vbno"/>`,
		"fallback": "vadivam:user-plus",
	});
}

export default Component;
