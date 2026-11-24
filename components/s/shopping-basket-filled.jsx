import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdu-cnb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdu-cnb7v"/>`,
		"fallback": "lucide-extended:shopping-basket-filled",
	});
}

export default Component;
