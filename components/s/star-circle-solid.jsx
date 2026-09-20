import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7zbev1jn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f7zbev1jn"/>`,
		"fallback": "streamline-plump:star-circle-solid",
	});
}

export default Component;
