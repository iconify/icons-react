import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuls9dqno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuls9dqno"/>`,
		"fallback": "iconaut:warehouse-solid",
	});
}

export default Component;
