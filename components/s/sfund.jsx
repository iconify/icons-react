import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9bg9h1um.css';
import '../../css/t/txkp30byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9bg9h1um"/><path class="txkp30byp"/>`,
		"fallback": "token:sfund",
	});
}

export default Component;
