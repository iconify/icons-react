import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/majb9u9sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="majb9u9sn"/>`,
		"fallback": "mdi:table-large-plus",
	});
}

export default Component;
