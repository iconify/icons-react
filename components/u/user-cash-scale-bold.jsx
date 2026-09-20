import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi7_4fbxw.css';
import '../../css/v/v4344lbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi7_4fbxw"/><path class="v4344lbfs"/>`,
		"fallback": "streamline-ultimate:user-cash-scale-bold",
	});
}

export default Component;
