import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5y65zb2d.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5y65zb2d"/>`,
		"fallback": "wpf:paper-plane",
	});
}

export default Component;
