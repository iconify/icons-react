import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmzt23b9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmzt23b9v"/>`,
		"fallback": "streamline-plump:select-all-solid",
	});
}

export default Component;
