import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-j6hab_j.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-j6hab_j"/>`,
		"fallback": "whh:officechair",
	});
}

export default Component;
