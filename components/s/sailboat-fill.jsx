import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6_6oxhtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x6_6oxhtw"/>`,
		"fallback": "mingcute:sailboat-fill",
	});
}

export default Component;
