import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvo6y868r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvo6y868r"/>`,
		"fallback": "noviair:message-square-edit",
	});
}

export default Component;
