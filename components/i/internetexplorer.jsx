import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4-zn3bud.css';

const viewBox = {"width":737,"height":729};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4-zn3bud"/>`,
		"fallback": "ls:internetexplorer",
	});
}

export default Component;
