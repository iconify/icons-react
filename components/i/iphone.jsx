import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8bnl6wke.css';
import '../../css/z/zy6g27b_q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m8bnl6wke"/><path clip-rule="evenodd" class="zy6g27b_q"/>`,
		"fallback": "flat-ui:iphone",
	});
}

export default Component;
