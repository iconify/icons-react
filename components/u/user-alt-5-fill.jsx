import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4skdrktw.css';
import '../../css/t/tioi38l2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4skdrktw"/><path class="tioi38l2q"/>`,
		"fallback": "si:user-alt-5-fill",
	});
}

export default Component;
