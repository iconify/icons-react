import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/css75hbqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="css75hbqt"/>`,
		"fallback": "cib:kodi",
	});
}

export default Component;
