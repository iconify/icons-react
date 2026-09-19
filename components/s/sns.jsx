import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnbntv8lb.css';

const viewBox = {"width":685,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnbntv8lb"/>`,
		"fallback": "ls:sns",
	});
}

export default Component;
