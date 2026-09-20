import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfv9zk3oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfv9zk3oo"/>`,
		"fallback": "token:vemp",
	});
}

export default Component;
