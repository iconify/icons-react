import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-p7zbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-p7zbuu"/>`,
		"fallback": "simple-icons:photocrowd",
	});
}

export default Component;
