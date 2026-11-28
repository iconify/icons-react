import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zho1v3d8q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zho1v3d8q"/>`,
		"fallback": "pullo:turtle-fill",
	});
}

export default Component;
