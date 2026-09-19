import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqgo0nb7v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqgo0nb7v"/>`,
		"fallback": "whh:layerorder",
	});
}

export default Component;
