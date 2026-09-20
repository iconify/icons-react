import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dolkt7wiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dolkt7wiw"/>`,
		"fallback": "tabler:tools-kitchen-2-filled",
	});
}

export default Component;
