import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guw8advmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guw8advmn"/>`,
		"fallback": "withicons:regex-gloss",
	});
}

export default Component;
