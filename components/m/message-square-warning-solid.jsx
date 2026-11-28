import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh7_gacbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh7_gacbi"/>`,
		"fallback": "iconaut:message-square-warning-solid",
	});
}

export default Component;
