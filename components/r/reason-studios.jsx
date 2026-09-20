import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnmz7triw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnmz7triw"/>`,
		"fallback": "thesvg:reason-studios",
	});
}

export default Component;
