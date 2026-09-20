import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9m4smbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l9m4smbxx"/>`,
		"fallback": "mingcute:large-arrow-left-fill",
	});
}

export default Component;
