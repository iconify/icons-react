import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zidbk5d5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zidbk5d5s"/>`,
		"fallback": "lucide:list-plus",
	});
}

export default Component;
