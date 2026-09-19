import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh3zz6b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh3zz6b2d"/>`,
		"fallback": "ci:text-align-left",
	});
}

export default Component;
