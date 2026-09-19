import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7lxjbmbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7lxjbmbp"/>`,
		"fallback": "humbleicons:italic",
	});
}

export default Component;
