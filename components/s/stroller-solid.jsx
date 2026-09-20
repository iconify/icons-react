import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yamn3ybiu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yamn3ybiu"/>`,
		"fallback": "streamline-plump:stroller-solid",
	});
}

export default Component;
