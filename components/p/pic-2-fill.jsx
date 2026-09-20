import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb3ax495o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lb3ax495o"/>`,
		"fallback": "mingcute:pic-2-fill",
	});
}

export default Component;
