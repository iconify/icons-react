import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq6pge_td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq6pge_td"/>`,
		"fallback": "mdi:text-shadow",
	});
}

export default Component;
