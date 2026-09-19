import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-f-t6bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p-f-t6bzj"/>`,
		"fallback": "griddy-icons:unarchive",
	});
}

export default Component;
