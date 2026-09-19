import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo65pac9q.css';

const viewBox = {"width":395,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo65pac9q"/>`,
		"fallback": "file-icons:unibeautify",
	});
}

export default Component;
