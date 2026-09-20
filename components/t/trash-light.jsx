import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcs7tzbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcs7tzbwp"/>`,
		"fallback": "lets-icons:trash-light",
	});
}

export default Component;
