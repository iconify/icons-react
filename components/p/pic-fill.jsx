import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr4w21ckn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr4w21ckn"/>`,
		"fallback": "mingcute:pic-fill",
	});
}

export default Component;
