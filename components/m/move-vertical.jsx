import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a85bfdc6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a85bfdc6l"/>`,
		"fallback": "vadivam:move-vertical",
	});
}

export default Component;
