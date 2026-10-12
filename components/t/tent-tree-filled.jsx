import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh2aqpbkj.css';
import '../../css/y/ysegc7b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yh2aqpbkj"/><path class="ysegc7b1e"/>`,
		"fallback": "lucide-extended:tent-tree-filled",
	});
}

export default Component;
