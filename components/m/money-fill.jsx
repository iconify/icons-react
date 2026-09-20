import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owb0njbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="owb0njbke"/>`,
		"fallback": "lets-icons:money-fill",
	});
}

export default Component;
