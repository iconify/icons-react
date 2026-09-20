import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwrwb0bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwrwb0bwv"/>`,
		"fallback": "mynaui:square-dashed-kanban-solid",
	});
}

export default Component;
