import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a98zu0ash.css';

const viewBox = {"width":551,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a98zu0ash"/>`,
		"fallback": "ls:lock",
	});
}

export default Component;
