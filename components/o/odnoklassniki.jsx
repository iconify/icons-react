import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyi-f8nlk.css';

const viewBox = {"width":579.274,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyi-f8nlk"/>`,
		"fallback": "brandico:odnoklassniki",
	});
}

export default Component;
