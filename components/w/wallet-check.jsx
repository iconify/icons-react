import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqb6y59an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqb6y59an"/>`,
		"fallback": "noviair:wallet-check",
	});
}

export default Component;
