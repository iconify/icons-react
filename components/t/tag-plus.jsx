import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk19oldpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk19oldpm"/>`,
		"fallback": "vadivam:tag-plus",
	});
}

export default Component;
