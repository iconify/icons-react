import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhzvifbgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhzvifbgh"/>`,
		"fallback": "streamline-plump:multiple-file-1-solid",
	});
}

export default Component;
