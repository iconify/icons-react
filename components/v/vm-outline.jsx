import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txinifb0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txinifb0j"/>`,
		"fallback": "codicon:vm-outline",
	});
}

export default Component;
