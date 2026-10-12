import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfcc4qbni.css';
import '../../css/y/ym-zwb07i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfcc4qbni"/><path class="ym-zwb07i"/>`,
		"fallback": "lucide-extended:shopping-cart-plus-filled",
	});
}

export default Component;
