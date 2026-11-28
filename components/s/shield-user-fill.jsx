import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd4x32brg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd4x32brg"/>`,
		"fallback": "pullo:shield-user-fill",
	});
}

export default Component;
