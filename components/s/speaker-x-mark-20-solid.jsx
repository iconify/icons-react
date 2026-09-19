import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3el5tocp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3el5tocp"/>`,
		"fallback": "heroicons:speaker-x-mark-20-solid",
	});
}

export default Component;
