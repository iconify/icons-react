import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwui5jb7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwui5jb7v"/>`,
		"fallback": "selfhst:njalla-dark",
	});
}

export default Component;
