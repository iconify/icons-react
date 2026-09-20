import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slij-3bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slij-3bql"/>`,
		"fallback": "tabler:subtask",
	});
}

export default Component;
