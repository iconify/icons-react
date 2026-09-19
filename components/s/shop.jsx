import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1avuqirv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1avuqirv"/>`,
		"fallback": "ep:shop",
	});
}

export default Component;
