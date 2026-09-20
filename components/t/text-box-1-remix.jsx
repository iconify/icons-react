import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl-a6dbis.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yl-a6dbis"/>`,
		"fallback": "streamline-plump:text-box-1-remix",
	});
}

export default Component;
