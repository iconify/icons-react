import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_tx9jc_q.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_tx9jc_q"/>`,
		"fallback": "el:remove-sign",
	});
}

export default Component;
