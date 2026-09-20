import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elffk3bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elffk3bcs"/>`,
		"fallback": "reicon:pen2-filled",
	});
}

export default Component;
