import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwz6q42rh.css';

const viewBox = {"width":397,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwz6q42rh"/>`,
		"fallback": "file-icons:sorbet",
	});
}

export default Component;
