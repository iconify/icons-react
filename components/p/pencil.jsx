import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrus7ebnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrus7ebnl"/>`,
		"fallback": "vadivam:pencil",
	});
}

export default Component;
