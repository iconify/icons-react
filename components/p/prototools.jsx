import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml9_4kbao.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml9_4kbao"/>`,
		"fallback": "catppuccin:prototools",
	});
}

export default Component;
