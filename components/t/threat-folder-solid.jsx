import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp04zqb4v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gp04zqb4v"/>`,
		"fallback": "streamline:threat-folder-solid",
	});
}

export default Component;
