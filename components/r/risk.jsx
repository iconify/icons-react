import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tekccvb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tekccvb4f"/>`,
		"fallback": "grommet-icons:risk",
	});
}

export default Component;
