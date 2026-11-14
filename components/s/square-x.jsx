import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv17p37qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv17p37qt"/>`,
		"fallback": "hugeicons:square-x",
	});
}

export default Component;
