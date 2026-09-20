import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj499ub0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj499ub0e"/>`,
		"fallback": "mynaui:panel-left-inactive-solid",
	});
}

export default Component;
