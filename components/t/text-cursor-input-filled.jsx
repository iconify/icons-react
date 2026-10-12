import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1p6d7jyb.css';
import '../../css/x/xiad0yblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1p6d7jyb"/><path class="xiad0yblv"/>`,
		"fallback": "lucide-extended:text-cursor-input-filled",
	});
}

export default Component;
