import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugwj_abnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugwj_abnj"/>`,
		"fallback": "noviair-light:message-dots",
	});
}

export default Component;
