import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yltp1rbuh.css';
import '../../css/d/drnbxkbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer yltp1rbuh"/><path class="drnbxkbxp duoicon-primary-layer"/>`,
		"fallback": "duo-icons:user-card",
	});
}

export default Component;
