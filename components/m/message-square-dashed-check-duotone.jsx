import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjoc47qyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjoc47qyp primary"/>`,
		"fallback": "iconaut:message-square-dashed-check-duotone",
	});
}

export default Component;
