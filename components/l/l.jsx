import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3mh3qbca.css';

const viewBox = {"width":72,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3mh3qbca"/>`,
		"fallback": "ls:l",
	});
}

export default Component;
