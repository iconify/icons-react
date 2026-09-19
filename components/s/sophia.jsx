import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8ibeob9s.css';

const viewBox = {"width":489,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8ibeob9s"/>`,
		"fallback": "file-icons:sophia",
	});
}

export default Component;
