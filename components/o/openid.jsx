import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvvar4bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvvar4bkv"/>`,
		"fallback": "simple-icons:openid",
	});
}

export default Component;
