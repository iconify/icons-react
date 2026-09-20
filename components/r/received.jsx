import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q19e26bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q19e26bgx"/>`,
		"fallback": "reicon:received",
	});
}

export default Component;
