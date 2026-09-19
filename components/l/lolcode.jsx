import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4ztfc8fc.css';

const viewBox = {"width":411,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4ztfc8fc"/>`,
		"fallback": "file-icons:lolcode",
	});
}

export default Component;
