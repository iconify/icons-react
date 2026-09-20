import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4rqzjdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj4rqzjdw"/>`,
		"fallback": "thesvg:japan-airlines",
	});
}

export default Component;
