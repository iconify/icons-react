import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wigw2ob_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wigw2ob_q"/>`,
		"fallback": "grommet-icons:skype",
	});
}

export default Component;
