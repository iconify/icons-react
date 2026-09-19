import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqt9-9byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqt9-9byr"/>`,
		"fallback": "grommet-icons:linkedin",
	});
}

export default Component;
