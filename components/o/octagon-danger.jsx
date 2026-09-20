import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt4ygg3jv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt4ygg3jv"/>`,
		"fallback": "mynaui:octagon-danger",
	});
}

export default Component;
