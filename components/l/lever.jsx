import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okv-yobal.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okv-yobal"/>`,
		"fallback": "at-icons:lever",
	});
}

export default Component;
