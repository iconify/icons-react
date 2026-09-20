import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po0cqhbal.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="po0cqhbal"/>`,
		"fallback": "streamline-flex:shipping-box-2-remix",
	});
}

export default Component;
