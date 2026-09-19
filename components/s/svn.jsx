import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdi4zdbhh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdi4zdbhh"/>`,
		"fallback": "file-icons:svn",
	});
}

export default Component;
